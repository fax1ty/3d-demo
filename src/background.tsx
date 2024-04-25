import { useControls } from "leva";

export function BackgroundColor() {
  const { backgroundColor } = useControls({ backgroundColor: "#fff" });

  return <color attach="background" args={[backgroundColor]} />;
}
