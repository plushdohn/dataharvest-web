import { RootState } from "@/src/store";
import { executeQuery } from "@/src/store/queryApiReducer";
import { useEffect, useMemo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import GenericCaptcha from "../../shared/atoms/GenericCaptcha";
import QueryCanvasClearButton from "../atoms/QueryCanvasClearButton";
import QueryCanvasRunButton from "../atoms/QueryCanvasRunButton";

function useCooldownTimer(count: number): [number, () => void] {
  const [secondsRemaining, setSecondsRemaining] = useState(0);

  let timer = useRef<NodeJS.Timer>();

  const startTimer = () => {
    let index = 0;

    timer.current = setInterval(() => {
      if (index <= count) {
        setSecondsRemaining(count - index);
        index++;
      } else {
        if (timer.current) clearInterval(timer.current);
      }
    }, 1000);
  };

  useEffect(
    () => () => {
      if (timer.current) clearInterval(timer.current);
    },
    []
  );

  return [secondsRemaining, startTimer];
}

export default function QueryBottomSection() {
  const [captcha, setCaptcha] = useState<string | null>(null);
  const dispatch = useDispatch();

  const captchaRef = useRef(null);

  const loading = useSelector((state: RootState) => state.queryApi.loading);
  const query = useSelector((state: RootState) => state.query);

  const [timer, startTimer] = useCooldownTimer(15);

  const runButtonDisabled = useMemo(
    () => captcha === null || query.operation === undefined || timer !== 0,
    [captcha, query, timer]
  );

  const validationError = useMemo(() => {
    if (!query.operation) return "An operation is required.";

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

    startTimer();
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
      {timer !== 0 && (
        <span className="text-sm text-gray-500 mt-2 block">
          Please wait {timer} seconds before querying again.
        </span>
      )}
      {validationError !== null && (
        <span className="mt-2 block text-red-500 text-xs">
          {validationError}
        </span>
      )}
    </div>
  );
}
