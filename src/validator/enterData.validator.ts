import { DETAIL_KEYS } from "@/app/(home)/constants";
import { array, boolean, date, mixed, object, string } from "yup";

export default object({
  isSuperStudent: boolean()
    .required()
    .label(DETAIL_KEYS.IS_SUPER_STUDENT.label).default(null),
  name: string().required().label(DETAIL_KEYS.NAME.label),
  fatherName: string().required().label(DETAIL_KEYS.FATHER_NAME.label),
  DOB: date().required().label(DETAIL_KEYS.DOB.label),
  mobileNumber: string()
    .required()
    .min(8)
    .max(15)
    .label(DETAIL_KEYS.MOBILE.label),
  emailId: string().email().required().label(DETAIL_KEYS.EMAIL.label),
  residentialAddress: string()
    .required()
    .label(DETAIL_KEYS.RESIDENTIAL_ADDRESS.label),
  city: string().required().label(DETAIL_KEYS.CITY.label),
  state: string().required().label(DETAIL_KEYS.STATE.label),
  country: string().required().label(DETAIL_KEYS.COUNTRY.label),
  nationality: string().required().label(DETAIL_KEYS.NATIONALITY.label),
  jobPosition: string().required().label(DETAIL_KEYS.JOB_POSITION.label),
  orgName: string().required().label(DETAIL_KEYS.ORG_NAME.label),
  experience: string()
    .required()
    .max(2)
    .label(DETAIL_KEYS.NO_OF_EXPERIENCES.label),
  highestEducationAttained: string()
    .required()
    .label(DETAIL_KEYS.HIGHEST_EDUCATION.label),
  educationDetail: string()
    .optional()
    .label(DETAIL_KEYS.EDUCATION_DETAIL.label),
  institutionName: string().required().label(DETAIL_KEYS.INSTITUTE_NAME.label),
  additionalCertifications: string()
    .required()
    .label(DETAIL_KEYS.ADDITIONAL_CERTIFICATES.label),
  awardsHonorsReceived: string().required().label(DETAIL_KEYS.AWARDS.label),
  technicalSoftSkills: array()
    .ensure()
    .of(
      object().shape({
        label: string().required(),
        value: string().required(),
      })
    )
    .required()
    .min(1)
    .label(DETAIL_KEYS.TECH_OR_SOFT_SKILLS.label),
  skillDetail: string().optional().label(DETAIL_KEYS.SKILL_DETAIL.label),
  areasOfInterestForProfessionalDevelopment: string()
    .required()
    .label(DETAIL_KEYS.AREAS_OF_INTEREST.label),
  bloodGroup: string().required().label(DETAIL_KEYS.BLOOD_GROUP.label),
  file: mixed().required().label(DETAIL_KEYS.FILE.label),
});
