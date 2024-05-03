import { Environment as EnvironmentBase } from "@react-three/drei";

import hdri from "./hdri.hdr";

export const Environment = () => {
  return (
    <EnvironmentBase
      files={hdri}
      Intensity={0.5}
      Rotation={[45, Math.PI / 2, 0]}
    />
  );
};
