import { INPUT_TYPES, REGEX } from "@/components/CustomField/constants";

export const DETAIL_KEYS = {
  IS_SUPER_STUDENT: { _key: "isSuperStudent", label: "Is super student" },
  NAME: { _key: "name", label: "Name" },
  FATHER_NAME: { _key: "fatherName", label: "Father name" },
  DOB: { _key: "DOB", label: "Date of birth" },
  MOBILE: { _key: "mobileNumber", label: "Mobile Number" },
  EMAIL: { _key: "emailId", label: "Email address" },
  RESIDENTIAL_ADDRESS: {
    _key: "residentialAddress",
    label: "Residential address",
  },
  CITY: { _key: "city", label: "City" },
  STATE: { _key: "state", label: "State" },
  COUNTRY: { _key: "country", label: "Country" },
  NATIONALITY: { _key: "nationality", label: "Nationality" },
  JOB_POSITION: { _key: "jobPosition", label: "Job position" },
  ORG_NAME: { _key: "orgName", label: "Organisation name" },
  NO_OF_EXPERIENCES: { _key: "experience", label: "No. of years (Experience)" },
  HIGHEST_EDUCATION: {
    _key: "highestEducationAttained",
    label: "Highest Education Attained (Degree/Diploma)",
  },
  EDUCATION_DETAIL: { _key: "educationDetail", label: "Education Detail" },
  INSTITUTE_NAME: { _key: "institutionName", label: "Institution Name" },
  ADDITIONAL_CERTIFICATES: {
    _key: "additionalCertifications",
    label: "Additional Certifications",
  },
  AWARDS: { _key: "awardsHonorsReceived", label: "Awards/Honors received" },
  TECH_OR_SOFT_SKILLS: {
    _key: "technicalSoftSkills",
    label: "Technical/ Soft Skills",
  },
  SKILL_DETAIL: { _key: "skillDetail", label: "Technical/ Soft Skill Details" },
  AREAS_OF_INTEREST: {
    _key: "areasOfInterestForProfessionalDevelopment",
    label: "Areas of Interest for Professional Development",
  },
  BLOOD_GROUP: { _key: "bloodGroup", label: "Blood Group" },
  FILE: { _key: "file", label: "Resume / CV" },
};

const BLOOD_GROUPS = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];

const EDUCATIONS = [
  {
    label: "10th",
    value: "10th",
  },
  {
    label: "12th",
    value: "12th",
  },
  {
    label: "Graduation",
    value: "graduation",
  },
  {
    label: "Post Graduation",
    value: "postGraduation",
  },
  {
    label: "Ph.D.",
    value: "phd",
  },
];

const booleansArray = [
  {
    label: "YES",
    value: "true",
  },
  {
    label: "NO",
    value: "false",
  },
];

export const DETAIL_FIELDS = [
  {
    _key: DETAIL_KEYS.IS_SUPER_STUDENT["_key"],
    placeholder: DETAIL_KEYS.IS_SUPER_STUDENT["label"],
    inputType: INPUT_TYPES.DROPDOWN,
    extraData: booleansArray,
  },
  {
    _key: DETAIL_KEYS.NAME["_key"],
    placeholder: DETAIL_KEYS.NAME["label"],
    inputType: INPUT_TYPES.INPUT,
  },
  {
    _key: DETAIL_KEYS.FATHER_NAME["_key"],
    placeholder: DETAIL_KEYS.FATHER_NAME["label"],
    inputType: INPUT_TYPES.INPUT,
  },

  {
    _key: DETAIL_KEYS.DOB["_key"],
    placeholder: DETAIL_KEYS.DOB["label"],
    inputType: INPUT_TYPES.DATE,
  },
  {
    _key: DETAIL_KEYS.MOBILE["_key"],
    placeholder: DETAIL_KEYS.MOBILE["label"],
    inputType: INPUT_TYPES.INPUT,
  },
  {
    _key: DETAIL_KEYS.EMAIL["_key"],
    placeholder: DETAIL_KEYS.EMAIL["label"],
    inputType: INPUT_TYPES.INPUT,
    regex: REGEX.EMAIL,
  },
  {
    _key: DETAIL_KEYS.RESIDENTIAL_ADDRESS["_key"],
    placeholder: DETAIL_KEYS.RESIDENTIAL_ADDRESS["label"],
    inputType: INPUT_TYPES.TEXT_AREA,
    md: 12,
  },
  {
    _key: DETAIL_KEYS.NATIONALITY["_key"],
    placeholder: DETAIL_KEYS.NATIONALITY["label"],
    inputType: INPUT_TYPES.DROPDOWN,
  },
  {
    _key: DETAIL_KEYS.COUNTRY["_key"],
    placeholder: DETAIL_KEYS.COUNTRY["label"],
    inputType: INPUT_TYPES.DROPDOWN,
  },
  {
    _key: DETAIL_KEYS.STATE["_key"],
    placeholder: DETAIL_KEYS.STATE["label"],
    inputType: INPUT_TYPES.DROPDOWN,
  },
  {
    _key: DETAIL_KEYS.CITY["_key"],
    placeholder: DETAIL_KEYS.CITY["label"],
    inputType: INPUT_TYPES.DROPDOWN,
  },
  {
    _key: DETAIL_KEYS.JOB_POSITION["_key"],
    placeholder: DETAIL_KEYS.JOB_POSITION["label"],
    inputType: INPUT_TYPES.INPUT,
  },
  {
    _key: DETAIL_KEYS.ORG_NAME["_key"],
    placeholder: DETAIL_KEYS.ORG_NAME["label"],
    inputType: INPUT_TYPES.INPUT,
  },
  {
    _key: DETAIL_KEYS.NO_OF_EXPERIENCES["_key"],
    placeholder: DETAIL_KEYS.NO_OF_EXPERIENCES["label"],
    inputType: INPUT_TYPES.INPUT,
  },
  {
    _key: DETAIL_KEYS.HIGHEST_EDUCATION["_key"],
    placeholder: DETAIL_KEYS.HIGHEST_EDUCATION["label"],
    inputType: INPUT_TYPES.DROPDOWN,
    extraData: EDUCATIONS,
  },
  {
    _key: DETAIL_KEYS.EDUCATION_DETAIL["_key"],
    placeholder: DETAIL_KEYS.EDUCATION_DETAIL["label"],
    inputType: INPUT_TYPES.TEXT_AREA,
    isOptional: true,
    md: 12,
  },
  {
    _key: DETAIL_KEYS.INSTITUTE_NAME["_key"],
    placeholder: DETAIL_KEYS.INSTITUTE_NAME["label"],
    inputType: INPUT_TYPES.INPUT,
  },
  {
    _key: DETAIL_KEYS.ADDITIONAL_CERTIFICATES["_key"],
    placeholder: DETAIL_KEYS.ADDITIONAL_CERTIFICATES["label"],
    inputType: INPUT_TYPES.INPUT,
  },
  {
    _key: DETAIL_KEYS.AWARDS["_key"],
    placeholder: DETAIL_KEYS.AWARDS["label"],
    inputType: INPUT_TYPES.INPUT,
  },
  {
    _key: DETAIL_KEYS.TECH_OR_SOFT_SKILLS["_key"],
    placeholder: DETAIL_KEYS.TECH_OR_SOFT_SKILLS["label"],
    inputType: INPUT_TYPES.FILTER_OPTIONS,
    extraData: EDUCATIONS,
  },
  {
    _key: DETAIL_KEYS.SKILL_DETAIL["_key"],
    placeholder: DETAIL_KEYS.SKILL_DETAIL["label"],
    inputType: INPUT_TYPES.TEXT_AREA,
    isOptional: true,
    md: 12,
  },
  {
    _key: DETAIL_KEYS.AREAS_OF_INTEREST["_key"],
    placeholder: DETAIL_KEYS.AREAS_OF_INTEREST["label"],
    inputType: INPUT_TYPES.INPUT,
  },
  {
    _key: DETAIL_KEYS.BLOOD_GROUP["_key"],
    placeholder: DETAIL_KEYS.BLOOD_GROUP["label"],
    inputType: INPUT_TYPES.DROPDOWN,
    extraData: BLOOD_GROUPS.map((group) => ({ label: group, value: group })),
  },
  {
    _key: DETAIL_KEYS.FILE["_key"],
    placeholder: DETAIL_KEYS.FILE["label"],
    inputType: INPUT_TYPES.FILE,
    md: 12,
    extraProps: {
      inputProps: {
        accept: "application/pdf, application/msword, text/plain, .doc, .docx",
      },
    },
  },
];
