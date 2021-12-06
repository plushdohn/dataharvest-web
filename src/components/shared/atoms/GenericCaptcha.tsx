import { forwardRef } from "react";
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

  return (
    <div className={props.className}>
      <ReCAPTCHA
        sitekey="6Lev2QcdAAAAAM6S_kJY__w-aLTTsXzehRWjoT-0"
        onChange={handleChange}
        theme="dark"
        onExpired={handleExpire}
        ref={ref}
        size="compact"
      />
    </div>
  );
});

export default GenericCaptcha;
