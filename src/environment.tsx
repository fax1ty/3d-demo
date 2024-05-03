import { Environment as EnvironmentBase } from "@react-three/drei";

import hdri from "./hdri.hdr";

export const Environment = () => {
  return (
    <EnvironmentBase
      files={hdri}
      environmentIntensity={1.6}
      environmentRotation={[95, Math.PI / 2, 0]}
    />
  );
};
