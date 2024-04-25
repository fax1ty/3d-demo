import {
  Bloom,
  BrightnessContrast,
  DepthOfField,
  EffectComposer,
  HueSaturation,
  ToneMapping,
} from "@react-three/postprocessing";
import { folder, useControls } from "leva";
import { BlendFunction } from "postprocessing";
import { Suspense, useMemo } from "react";
import { degToRad } from "three/src/math/MathUtils.js";

export function Effects() {
  const {
    brightness,
    contrast,
    bloomIntensity,
    mipmapBlur,
    focusDistance,
    focalLength,
    bokehScale,
    hueBlendFunction,
    hue,
    saturation,
    toneMappingBlendFunction,
    adaptiveToneMapping,
    toneMappingResolution,
    toneMappingMiddleGrey,
    toneMappingMaxLuminance,
    toneMappingAverageLuminance,
    toneMappingAdaptationRate,
  } = useControls({
    brightnessContrast: folder(
      {
        brightness: { min: -1, max: 1, value: 0 },
        contrast: { min: -1, max: 1, value: 0 },
      },
      { collapsed: true }
    ),
    bloom: folder({ bloomIntensity: 1, mipmapBlur: true }, { collapsed: true }),
    depthOfField: folder(
      {
        focusDistance: 0,
        focalLength: 0.02,
        bokehScale: 2,
      },
      { collapsed: true }
    ),
    hueSaturation: folder(
      {
        hueBlendFunction: BlendFunction.NORMAL,
        hue: { min: -180, max: 180, step: 1, value: 0 },
        saturation: 0,
      },
      { collapsed: true }
    ),
    toneMapping: folder(
      {
        toneMappingBlendFunction: BlendFunction.NORMAL,
        adaptiveToneMapping: true,
        toneMappingResolution: 256,
        toneMappingMiddleGrey: 0.6,
        toneMappingMaxLuminance: 16,
        toneMappingAverageLuminance: 1,
        toneMappingAdaptationRate: 1,
      },
      { collapsed: true }
    ),
  });

  const hueRads = useMemo(() => degToRad(hue), [hue]);
  const saturationRads = useMemo(() => degToRad(saturation), [saturation]);

  return (
    <Suspense>
      <EffectComposer>
        <BrightnessContrast brightness={brightness} contrast={contrast} />
        <DepthOfField
          focusDistance={focusDistance}
          focalLength={focalLength}
          bokehScale={bokehScale}
        />
        <HueSaturation
          blendFunction={hueBlendFunction}
          hue={hueRads}
          saturation={saturationRads}
        />
        <ToneMapping
          blendFunction={toneMappingBlendFunction}
          adaptive={adaptiveToneMapping}
          resolution={toneMappingResolution}
          middleGrey={toneMappingMiddleGrey}
          maxLuminance={toneMappingMaxLuminance}
          averageLuminance={toneMappingAverageLuminance}
          adaptationRate={toneMappingAdaptationRate}
        />
        <Bloom intensity={bloomIntensity} mipmapBlur={mipmapBlur} />
      </EffectComposer>
    </Suspense>
  );
}
