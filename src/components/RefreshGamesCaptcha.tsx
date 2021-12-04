import { setRefreshGamesCaptcha } from "../store/uiReducer";
import GenericCaptcha from "./GenericCaptcha";

export default function RefreshGamesCaptcha() {
  return (
    <GenericCaptcha
      actionToDispatch={setRefreshGamesCaptcha}
      className="mt-4"
    />
  );
}
