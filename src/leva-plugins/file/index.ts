import { createPlugin } from "leva/plugin";

import { FileComponent } from "./file";
import { normalize } from "./file-props";

export const pluginFile = createPlugin({
  normalize,
  component: FileComponent,
});
