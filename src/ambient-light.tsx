import { useControls } from "leva";

export function AmbientLight() {
  const { ambientIntensity, ambientColor } = useControls("ambientLight", {
    ambientIntensity: { min: 0, value: 1 },
    ambientColor: "#ffffff",
  });

  return <ambientLight intensity={ambientIntensity} color={ambientColor} />;
}
