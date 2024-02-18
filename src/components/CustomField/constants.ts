export const REGEX = {
  NUMBERS: /^\d+$/,
  PHONE: /^[6-9]\d{9}$/,
  EMAIL:
    /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  DECIMALS: /^\d+(\.\d{1,2})?$/,
};

export const INPUT_TYPES = {
  DATE: "DATE",
  DROPDOWN: "DROPDOWN",
  FILE: "FILE",
  FILTER_OPTIONS: "FILTER_OPTIONS",
  INPUT: "INPUT",
  TEXT_AREA: "TEXT_AREA",
  NUM: "number",
};

export const getErrorKey = (_key: string) => `er_${_key}`;
export const getErrorText = (_key: string) => `er_txt_${_key}`;
