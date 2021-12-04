import LRU from "lru-cache";

export default function rateLimit(options: {
  uniqueTokenPerInterval: number;
  interval: number;
}) {
  const tokenCache = new LRU({
    max: options.uniqueTokenPerInterval,
    maxAge: options.interval,
  });

  return {
    check: (token: string) =>
      new Promise<void>((resolve, reject) => {
        const stored = tokenCache.get(token);

        if (stored === undefined) {
          tokenCache.set(token, true);
          resolve();
        } else reject();
      }),
  };
}
