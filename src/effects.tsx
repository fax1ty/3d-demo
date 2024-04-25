import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { folder, useControls } from "leva";
import { Suspense } from "react";

export function Effects() {
  const { bloomIntensity, bloomMipmapBlur } = useControls({
    bloom: folder({ bloomIntensity: 1, bloomMipmapBlur: true }),
  });

  return (
    <Suspense>
      <EffectComposer>
        <Bloom intensity={bloomIntensity} mipmapBlur={bloomMipmapBlur} />
      </EffectComposer>
    </Suspense>
  );
}
