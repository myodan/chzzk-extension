import { defineAppConfig } from "wxt/sandbox";

declare module "wxt/sandbox" {
  export interface WxtAppConfig {
    options: {
      name: "bypassGrid";
      value: boolean;
    }[];
  }
}

export default defineAppConfig({
  options: [
    {
      name: "bypassGrid",
      value: true,
    },
  ],
});
