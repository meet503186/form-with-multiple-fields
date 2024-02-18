import React from "react";
import { INPUT_TYPES } from "./constants";
import {
  ICustomFieldItem,
  ICustomFieldProps,
  IExtraData,
} from "../../interface/customField.interface";
import {
  Control,
  Controller,
  FieldValues,
  UseControllerProps,
  useController,
} from "react-hook-form";

import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Autocomplete,
  Chip,
} from "@mui/material";

export const CustomField = (props: ICustomFieldProps) => {
  const { item, error, errorText, ...rest } = props;
  const {
    inputType,
    placeholder: _placeholder,
    extraProps,
    extraData,
    _key,
    isOptional,
  } = item;

  const placeholder = !isOptional ? `${_placeholder}*` : _placeholder;

  const { field } = useController(props as UseControllerProps);

  switch (inputType) {
    case INPUT_TYPES.FILTER_OPTIONS:
      return (
        <Autocomplete
          {...field}
          defaultValue={[]}
          value={Array.isArray(field.value) ? field.value : []}
          onChange={(_, newValue: IExtraData) => {
            field.onChange(newValue || []);
          }}
          multiple
          options={extraData}
          getOptionLabel={(option) => option.label || ""}
          filterSelectedOptions
          filterOptions={(options) =>
            options.filter((item) => {
              const fieldValue: IExtraData[] = field.value || [];
              if (!fieldValue.length) {
                return item;
              }
              return !fieldValue.some((fv) => fv.value == item.value) && item;
            })
          }
          renderTags={(tagValue, getTagProps) =>
            tagValue.map((option, index) => (
              <Chip
                {...getTagProps({ index })}
                key={option.value}
                label={option.label}
              />
            ))
          }
          renderInput={(params) => (
            <TextField
              {...params}
              variant="outlined"
              error={error}
              helperText={errorText}
              label={placeholder}
              placeholder={placeholder}
              {...extraProps}
            />
          )}
          {...extraProps}
        />
      );

    case INPUT_TYPES.DROPDOWN:
      return (
        <FormControl error={error} fullWidth {...extraProps}>
          <InputLabel id={_key}>{placeholder}</InputLabel>
          <Select
            labelId={_key}
            label={placeholder}
            MenuProps={{ PaperProps: { sx: { maxHeight: 300 } } }}
            {...field}
          >
            {extraData?.map((_item, index) => (
              <MenuItem key={index} value={_item.value}>
                {_item.label}
              </MenuItem>
            ))}
          </Select>
          {!!errorText && (
            <FormHelperText error={error}>{errorText}</FormHelperText>
          )}
        </FormControl>
      );

    case INPUT_TYPES.TEXT_AREA:
      return (
        <TextField
          fullWidth
          InputProps={{
            rows: 5,
            multiline: true,
            inputComponent: "textarea",
          }}
          error={error}
          helperText={errorText}
          label={placeholder}
          variant="outlined"
          {...rest}
          {...field}
          {...extraProps}
        />
      );

    case INPUT_TYPES.FILE:
      return (
        <TextField
          fullWidth
          label={placeholder}
          variant="outlined"
          error={error}
          helperText={errorText}
          type="file"
          InputLabelProps={{ shrink: true }}
          {...rest}
          {...field}
          {...extraProps}
        />
      );

    case INPUT_TYPES.DATE:
      return (
        <TextField
          fullWidth
          label={placeholder}
          variant="outlined"
          error={error}
          helperText={errorText}
          type="date"
          InputLabelProps={{ shrink: true }}
          {...rest}
          {...field}
          {...extraProps}
        />
      );

    default:
      return (
        <TextField
          fullWidth
          label={placeholder}
          variant="outlined"
          error={error}
          helperText={errorText}
          {...rest}
          {...field}
          {...extraProps}
        />
      );
  }
};
