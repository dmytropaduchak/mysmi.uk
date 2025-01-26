import { atomWithStorage } from "jotai/utils";
import { PaletteMode } from "@mui/material";
import { useAtom } from "jotai";
import { useCallback, useMemo } from "react";

export enum THEMES {
  LIGHT = "light",
  DARK = "dark",
}

interface Notification {
  type: "error" | "info" | "success",
  text: string,
}

interface State {
  notifications: Notification[],
  theme: THEMES | PaletteMode,
}

const state = atomWithStorage<State>('mysmi.uk', {
  theme: THEMES.LIGHT,
  notifications: [],
});

export const useTheme = () => {
  const [data] = useAtom(state);
  return data.theme;
}

export const useNotification = () => {
  const [data, setData] = useAtom(state);
  return useCallback((notification: Notification) => {
    if (!data.notifications.find(({ text }) => text == notification.text)) {
      const notifications = [...data.notifications, notification];
      setData({ ...data, notifications });
    }
  }, [data, setData]);
}

export const usePalette = () => {
  const theme = useTheme();
  const mode = theme || THEMES.DARK;

  return useMemo(() => ({
    mode,
  }), [mode]);
}

export default state;
