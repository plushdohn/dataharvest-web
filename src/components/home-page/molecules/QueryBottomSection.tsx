import { RootState } from "@/src/store";
import { executeQuery } from "@/src/store/queryApiReducer";
import { useEffect, useMemo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import GenericCaptcha from "../../shared/atoms/GenericCaptcha";
import QueryCanvasClearButton from "../atoms/QueryCanvasClearButton";
import QueryCanvasRunButton from "../atoms/QueryCanvasRunButton";

export default function QueryBottomSection() {
  const [captcha, setCaptcha] = useState<string | null>(null);
  const dispatch = useDispatch();

  const captchaRef = useRef(null);

  const loading = useSelector((state: RootState) => state.queryApi.loading);
  const query = useSelector((state: RootState) => state.query);
  const runButtonDisabled = useMemo(
    () => captcha === null || query.operations.length === 0,
    [captcha, query]
  );

  const validationError = useMemo(() => {
    if (query.operations.length === 0)
      return "At least one operation is required.";

    return null;
  }, [query]);

  function captchaHandler(value: string | null) {
    setCaptcha(value);
  }

  function runButtonHandler() {
    if (captcha === null) return;

    dispatch(
      executeQuery({
        query,
        captcha,
      })
    );

    setCaptcha(null);
  }

  useEffect(() => {
    if (!loading) {
      if (captchaRef.current !== null) {
        // @ts-ignore
        captchaRef.current.reset();
      }
    }
  }, [loading]);

  return (
    <div className="mt-8">
      <GenericCaptcha callback={captchaHandler} ref={captchaRef} />
      <div className="flex items-center mt-4">
        <QueryCanvasRunButton
          disabled={runButtonDisabled}
          loading={loading}
          callback={runButtonHandler}
          className="mr-2"
        />
        <QueryCanvasClearButton />
      </div>
      {validationError !== null && (
        <span className="mt-2 block text-red-500 text-xs">
          {validationError}
        </span>
      )}
    </div>
  );
}
