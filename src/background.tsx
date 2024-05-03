import { useControls } from "leva";

export function BackgroundColor() {
  const { backgroundColor } = useControls({ backgroundColor: "#1e2b3e" });

  return <color attach="background" args={[backgroundColor]} />;
}
