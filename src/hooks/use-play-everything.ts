import { useEffect } from "react";
import { AnimationAction } from "three";

export const usePlayEverything = (actions: {
  [key: string]: AnimationAction | null;
}) => {
  useEffect(() => {
    for (const name in actions) {
      const action = actions[name];
      if (!action) return;
      action.play();
    }
  }, [actions]);
};
