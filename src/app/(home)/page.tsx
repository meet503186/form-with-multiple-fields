"use client";

import { Button, Card, Grid, Typography } from "@mui/material";
import { Header } from "@/components/Header";
import React, { useState } from "react";
import { DETAIL_FIELDS } from "./constants";
import { CustomField } from "@/components/CustomField";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import enterDataValidator from "@/validator/enterData.validator";

export default function EnterData() {
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
      name: "",
      additionalCertifications: "",
      areasOfInterestForProfessionalDevelopment: "",
      awardsHonorsReceived: "",
      bloodGroup: "",
      nationality: "",
      country: "",
      state: "",
      city: "",
      educationDetail: "",
      emailId: "",
      experience: "",
      fatherName: "",
      file: "",
      highestEducationAttained: "",
      institutionName: "",
      jobPosition: "",
      mobileNumber: "",
      orgName: "",
      residentialAddress: "",
      skillDetail: "",
      technicalSoftSkills: [],
      DOB: undefined,
    },
    mode: "onChange",
    resolver: yupResolver(enterDataValidator),
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <Typography
      component={"form"}
      sx={{ background: "#1087dd1f", py: { xs: 0, sm: 4 } }}
      onSubmit={onSubmit}
    >
      <Card
        sx={{
          p: 3,
          rowGap: 2,
          display: "flex",
          flexDirection: "column",
          width: { xs: "100%", sm: "50vw" },
          mx: "auto",
        }}
      >
        <Header
          title="Form"
          variant="h4"
          titleStyle={{ fontWeight: 600 }}
        />
        <Grid container rowSpacing={2} spacing={3}>
          {DETAIL_FIELDS.map((item, index) => {
            const { _key, md } = item;

            if (!_key) return null;

            return (
              <Grid key={_key + index} item md={md || 6} sm={12} xs={12}>
                <CustomField
                  name={_key}
                  control={control}
                  item={item}
                  error={!!errors[_key as keyof typeof errors]}
                  errorText={errors[_key as keyof typeof errors]?.message}
                />
              </Grid>
            );
          })}
        </Grid>

        <Button
          type="submit"
          color={"primary"}
          variant="contained"
          sx={{ px: "20px", mt: "20px" }}
        >
          Submit
        </Button>
      </Card>
    </Typography>
  );
}
