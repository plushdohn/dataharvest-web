export default async function verifyCaptcha(captcha: string) {
  const res: {
    success: boolean;
  } = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      secret: "6Lev2QcdAAAAAFLj_uG8NS0Djb6YecNj06989KYA",
      response: captcha,
    }),
  }).then((r) => {
    if (!r.ok) {
      throw new Error("Bad ReCaptcha response");
    }

    return r.json();
  });

  if (!res.success) {
    throw new Error("Provided captcha was invalid.");
  }

  return res.success;
}
