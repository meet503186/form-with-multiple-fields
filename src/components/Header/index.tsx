import { useTheme } from "@emotion/react";
import { Button, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { CustomField } from "../CustomField";
import { INPUT_TYPES } from "../CustomField/constants";

interface IHeaderProps {
  variant?: string;
  style?: any;
  dropDown?: any;
  title: string;
  buttons?: any;
  titleStyle?: any;
}

export function Header({
  variant,
  style = {},
  dropDown,
  title,
  buttons = [],
  titleStyle = {},
}: IHeaderProps) {
  return (
    <Typography
      className="hide-scrollbar"
      component={"div"}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        overflowX: "auto",
        gap: 8,
        py: "8px",
        ...style,
      }}
    >
      {!!title && (
        <Typography
          variant={variant as any}
          sx={{ display: "inline-flex", ...titleStyle }}
        >
          {title}
        </Typography>
      )}

      {!!dropDown ||
        (!!buttons.length && (
          <Typography
            component={"div"}
            sx={{
              flex: 1,
              justifyContent: { xs: "space-between", sm: "flex-end" },
              display: "flex",
              gap: 2,
            }}
          >
            {!!dropDown && (
              <Typography
                component={"div"}
                sx={{ width: { xs: "150px", sm: "200px" } }}
              >
                <CustomField
                  value={dropDown.value}
                  onChange={({ value }) => dropDown.onChange(value)}
                  item={{
                    _key: "",
                    inputType: INPUT_TYPES.DROPDOWN,
                    placeholder: dropDown.placeholder || "Select Language",
                    extraData: dropDown.data,
                  }}
                />
              </Typography>
            )}
            {buttons.map((buttonItem: any, index: number) => {
              return (
                <Button
                  key={index}
                  size="small"
                  variant="contained"
                  {...buttonItem}
                  style={{ whiteSpace: "nowrap" }}
                >
                  {buttonItem.title}
                </Button>
              );
            })}
          </Typography>
        ))}
    </Typography>
  );
}
