import { useControls } from "leva";

export function BackgroundColor() {
  const { backgroundColor } = useControls({ backgroundColor: "#0D1827" });

  return <color attach="background" args={[backgroundColor]} />;
}
