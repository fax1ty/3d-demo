import { useControls } from "leva";

export function BackgroundColor() {
  const { backgroundColor } = useControls({ backgroundColor: "#11202F" });

  return <color attach="background" args={[backgroundColor]} />;
}
