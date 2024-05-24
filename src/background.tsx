import { useControls } from "leva";

export function BackgroundColor() {
  const { backgroundColor } = useControls({ backgroundColor: "#112645" });

  return <color attach="background" args={[backgroundColor]} />;
}
