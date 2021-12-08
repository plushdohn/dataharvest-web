import LRU from "lru-cache";
import { NextApiRequest } from "next";
import requestIp from "request-ip";

const createRateLimiter = (options: {
  uniqueTokenPerInterval: number;
  interval: number;
}) => {
  const tokenCache = new LRU({
    max: 500,
    maxAge: 60,
  });

  function check(token: string) {
    return new Promise<void>((resolve, reject) => {
      const stored = tokenCache.get(token);

      console.log(token, stored);

      if (stored === undefined) {
        tokenCache.set(token, "stored");
        resolve();
      } else reject();
    });
  }

  return {
    check,
    checkRequest: (req: NextApiRequest) => {
      return new Promise<boolean>(async (resolve) => {
        const detectedIp = requestIp.getClientIp(req);

        if (detectedIp === null) {
          return resolve(false);
        }

        try {
          await check(detectedIp);

          resolve(true);
        } catch (err) {
          resolve(false);
        }
      });
    },
  };
};

export default createRateLimiter;
