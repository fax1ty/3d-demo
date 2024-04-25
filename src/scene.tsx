import { Effects } from "./effects";
import { Environment } from "./environment";
import { Model } from "./model";

export function Scene() {
  return (
    <>
      <Effects />

      <Model />

      <Environment />
    </>
  );
}
