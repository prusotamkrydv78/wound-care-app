import mongoose from "mongoose";
const { Schema } = mongoose;
import baseFields from "../user.model";

const patientProfileSchema = {
  address: String,
  city: String,
  state: String,
  zipCode: String,
  emergencyContact: {
    name: String,
    phone: String,
    relation: String,
  },
  insurance: {
    provider: String,
    policyNumber: String,
    groupNumber: String,
  },
  medical: {
    conditions: String,
    medications: String,
    allergies: String,
    primaryCarePhysician: String,
    preferredHospital: String,
  },
};
const PatientSchema = new Schema(
  {
    ...baseFields,
    ...patientProfileSchema,
  },
  { timestamps: true }
);

const PatientModel =
  mongoose.models.Patient ||
  mongoose.model("Patient", PatientSchema, "patients");
export default PatientModel;
