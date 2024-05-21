import { SoftShadows as Base } from "@react-three/drei";
import { useControls } from "leva";

export function SoftShadows() {
  const { enabled, size, samples, focus } = useControls(
    "softShadows",
    {
      enabled: true,
      size: { min: 0, value: 25 },
      samples: { min: 1, value: 10 },
      focus: { min: 0, value: 0 },
    },
    { collapsed: true }
  );

  if (!enabled) return null;

  return <Base size={size} samples={samples} focus={focus} />;
}
