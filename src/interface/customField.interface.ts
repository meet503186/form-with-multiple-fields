import { Control, FieldValues } from "react-hook-form";

export interface ICustomFieldProps {
  name: string;
  control: unknown | Control<FieldValues>;
  item: ICustomFieldItem;
  error?: boolean;
  errorText?: string;
  color?: string;
  disabled?: boolean;
  itemData?: any;
  size?: string;
}

export interface ICustomFieldItem {
  _key: string;
  placeholder: string;
  inputType: string;
  isOptional?: boolean;
  regex?: any;
  extraProps?: any;
  extraData?: IExtraData[];
}

export interface IExtraData {
  label: string;
  value: string;
}
