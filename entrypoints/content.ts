import { BYPASS_USER_AGENT } from "~/libs/consts";
import { overrideProperty } from "~/libs/funtions";

export default defineContentScript({
  world: "MAIN",
  runAt: "document_start",
  matches: ["https://chzzk.naver.com/*"],
  main() {
    overrideProperty(window.navigator, "userAgent", BYPASS_USER_AGENT);
  },
});
