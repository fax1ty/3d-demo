import { useCallback, useEffect } from "react";
import { AnimationAction } from "three";

export const usePlayEverything = (actions: {
  [key: string]: AnimationAction | null;
}) => {
  const play = useCallback(() => {
    for (const name in actions) {
      const action = actions[name];
      if (!action) return;
      action.play();
    }
  }, [actions]);

  const toggle = useCallback(() => {
    for (const name in actions) {
      const action = actions[name];
      if (!action) return;
      action.paused = !action.paused;
    }
  }, [actions]);

  useEffect(() => {
    play();
  }, [play]);

  return { toggle };
};
