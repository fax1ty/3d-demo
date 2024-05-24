import { useThree } from "@react-three/fiber";
import { useControls } from "leva";
import { useEffect } from "react";
import {
  ACESFilmicToneMapping,
  AgXToneMapping,
  CineonToneMapping,
  CustomToneMapping,
  LinearToneMapping,
  NeutralToneMapping,
  NoToneMapping,
  ReinhardToneMapping,
} from "three";

export function GLToneMappingControls() {
  const { gl } = useThree();

  const { glToneMapping, glToneMappingExposure } = useControls({
    glToneMapping: {
      value: ACESFilmicToneMapping,
      options: {
        NoToneMapping,
        LinearToneMapping,
        ReinhardToneMapping,
        CineonToneMapping,
        ACESFilmicToneMapping,
        CustomToneMapping,
        AgXToneMapping,
        NeutralToneMapping,
      },
    },
    glToneMappingExposure: { min: 0, value: 0.9 },
  });

  useEffect(() => {
    gl.toneMapping = glToneMapping;
  }, [gl, glToneMapping]);

  useEffect(() => {
    gl.toneMappingExposure = glToneMappingExposure;
  }, [gl, glToneMapping, glToneMappingExposure]);

  return null;
}
