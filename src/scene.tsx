import { AmbientLight } from "./ambient-light";
import { BackgroundColor } from "./background";
import { Effects } from "./effects";
import { Environment } from "./environment";
import { Model } from "./model";
import { SoftShadows } from "./soft-shadows";

export function Scene() {
  return (
    <>
      <AmbientLight />

      <SoftShadows />

      <BackgroundColor />

      <Effects />

      <Model />

      <Environment />
    </>
  );
}
