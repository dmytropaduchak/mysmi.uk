import { atomWithStorage } from "jotai/utils";
import { PaletteMode } from "@mui/material";

export enum CONSENT {
  YES = "yes",
  NO = "no",
}

export enum THEMES {
  LIGHT = "light",
  DARK = "dark",
}

export enum MESSAGES {
  ERROR = "error",
  WARNING = "warning",
  SUCCESS = "success",
}

export interface Message {
  type: MESSAGES;
  text: string;
}

export interface State {
  messages: Message[];
  consent?: CONSENT;
  consentSettings?: Record<string, CONSENT>;
  theme: THEMES | PaletteMode;
  email?: string;
}

export const atom = atomWithStorage<State>("atom", {
  theme: THEMES.DARK,
  messages: [],
});

