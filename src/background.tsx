import { useControls } from "leva";

export function BackgroundColor() {
  const { backgroundColor } = useControls({ backgroundColor: "#293b55" });

  return <color attach="background" args={[backgroundColor]} />;
}
