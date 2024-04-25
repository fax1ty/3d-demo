import { BackgroundColor } from "./background";
import { Effects } from "./effects";
import { Environment } from "./environment";
import { Model } from "./model";

export function Scene() {
  return (
    <>
      <BackgroundColor />

      <Effects />

      <Model />

      <Environment />
    </>
  );
}
