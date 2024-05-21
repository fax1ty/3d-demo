import { Environment as EnvironmentBase } from "@react-three/drei";
import { useControls } from "leva";
import { useMemo } from "react";
import { degToRad } from "three/src/math/MathUtils.js";

import hdri from "./hdri.hdr";

export const Environment = () => {
  const { environmentIntensity, environmentRotation } = useControls(
    "hdri",
    {
      environmentIntensity: { min: 0, step: 0.1, value: 0.5 },
      environmentRotation: {
        min: 0,
        max: 180,
        step: 1,
        value: [45, 90, 0],
      },
    },
    { collapsed: true }
  );

  const environmentRotationRads = useMemo(
    () => environmentRotation.map(degToRad) as [number, number, number],
    [environmentRotation]
  );

  return (
    <EnvironmentBase
      files={hdri}
      environmentIntensity={environmentIntensity}
      environmentRotation={environmentRotationRads}
    />
  );
};
