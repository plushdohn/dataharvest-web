import { forwardRef, useEffect, useMemo, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const GenericCaptcha = forwardRef(function Captcha(
  props: {
    callback: (value: string | null) => any;
    className?: string;
  },
  ref: React.Ref<ReCAPTCHA>
) {
  function handleChange(value: string | null) {
    props.callback(value);
  }

  function handleExpire() {
    props.callback(null);
  }

  const [size, setSize] = useState<"compact" | "normal" | null>(null);

  useEffect(() => {
    const width = window.innerWidth;

    if (width > 640) setSize("normal");
    else return setSize("compact");
  }, []);

  return (
    <div className={props.className}>
      {size !== null && (
        <ReCAPTCHA
          sitekey="6Lev2QcdAAAAAM6S_kJY__w-aLTTsXzehRWjoT-0"
          onChange={handleChange}
          theme="dark"
          onExpired={handleExpire}
          ref={ref}
          size={size}
        />
      )}
    </div>
  );
});

export default GenericCaptcha;
