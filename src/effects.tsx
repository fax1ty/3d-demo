import {
  Bloom,
  BrightnessContrast,
  DepthOfField,
  EffectComposer,
  HueSaturation,
  SMAA,
  ToneMapping,
} from "@react-three/postprocessing";
import { folder, useControls } from "leva";
import { BlendFunction } from "postprocessing";
import { Suspense, useMemo } from "react";
import { degToRad } from "three/src/math/MathUtils.js";

const BLEND_FUNCTIONS = {
  SKIP: BlendFunction.SKIP,
  SET: BlendFunction.SET,
  ADD: BlendFunction.ADD,
  ALPHA: BlendFunction.ALPHA,
  AVERAGE: BlendFunction.AVERAGE,
  COLOR: BlendFunction.COLOR,
  COLOR_BURN: BlendFunction.COLOR_BURN,
  COLOR_DODGE: BlendFunction.COLOR_DODGE,
  DARKEN: BlendFunction.DARKEN,
  DIFFERENCE: BlendFunction.DIFFERENCE,
  DIVIDE: BlendFunction.DIVIDE,
  DST: BlendFunction.DST,
  EXCLUSION: BlendFunction.EXCLUSION,
  HARD_LIGHT: BlendFunction.HARD_LIGHT,
  HARD_MIX: BlendFunction.HARD_MIX,
  HUE: BlendFunction.HUE,
  INVERT: BlendFunction.INVERT,
  INVERT_RGB: BlendFunction.INVERT_RGB,
  LIGHTEN: BlendFunction.LIGHTEN,
  LINEAR_BURN: BlendFunction.LINEAR_BURN,
  LINEAR_DODGE: BlendFunction.LINEAR_DODGE,
  LINEAR_LIGHT: BlendFunction.LINEAR_LIGHT,
  LUMINOSITY: BlendFunction.LUMINOSITY,
  MULTIPLY: BlendFunction.MULTIPLY,
  NEGATION: BlendFunction.NEGATION,
  NORMAL: BlendFunction.NORMAL,
  OVERLAY: BlendFunction.OVERLAY,
  PIN_LIGHT: BlendFunction.PIN_LIGHT,
  REFLECT: BlendFunction.REFLECT,
  SATURATION: BlendFunction.SATURATION,
  SCREEN: BlendFunction.SCREEN,
  SOFT_LIGHT: BlendFunction.SOFT_LIGHT,
  SRC: BlendFunction.SRC,
  SUBTRACT: BlendFunction.SUBTRACT,
  VIVID_LIGHT: BlendFunction.VIVID_LIGHT,
};

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
    antialiasing,
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
        hueBlendFunction: {
          value: BlendFunction.NORMAL,
          options: BLEND_FUNCTIONS,
        },
        hue: { min: -180, max: 180, step: 1, value: 0 },
        saturation: 0,
      },
      { collapsed: true }
    ),
    toneMapping: folder(
      {
        toneMappingBlendFunction: {
          value: BlendFunction.NORMAL,
          options: BLEND_FUNCTIONS,
        },
        adaptiveToneMapping: true,
        toneMappingResolution: 256,
        toneMappingMiddleGrey: 0.6,
        toneMappingMaxLuminance: 16,
        toneMappingAverageLuminance: 1,
        toneMappingAdaptationRate: 1,
      },
      { collapsed: true }
    ),
    antialiasing: { value: "msaa", options: ["msaa", "smaa"] },
  });

  const hueRads = useMemo(() => degToRad(hue), [hue]);
  const saturationRads = useMemo(() => degToRad(saturation), [saturation]);

  return (
    <Suspense>
      <EffectComposer multisampling={antialiasing === "msaa" ? 8 : 0}>
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

        <>{antialiasing === "smaa" && <SMAA />}</>
      </EffectComposer>
    </Suspense>
  );
}
