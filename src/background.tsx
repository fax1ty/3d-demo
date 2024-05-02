import { useControls } from "leva";

export function BackgroundColor() {
  const { backgroundColor } = useControls({ backgroundColor: "#2a4c6f" });

  return <color attach="background" args={[backgroundColor]} />;
}
