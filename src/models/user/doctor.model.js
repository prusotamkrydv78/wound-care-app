import mongoose from "mongoose";

import baseFields from "../user.model";
const { Schema } = mongoose;

// 🩺 Doctor Schema
const doctorProfileSchema = {};

const DoctorSchema = new Schema(
  {
    ...baseFields,
    specialization: { type: String, default: "" },
    licenseNumber: { type: String, default: "" },
    licenseState: { type: String, default: "" },
    npiNumber: { type: String, default: "" },
    deaNumber: { type: String, default: "" },
    education: {
      medicalSchool: { type: String, default: "" },
      graduationYear: { type: String, default: "" },
      residencyProgram: { type: String, default: "" },
      fellowshipProgram: { type: String, default: "" },
    },
    certifications: { type: String, default: "" },
    affiliations: { type: String, default: "" },
    experience: { type: String, default: "" },
    practiceType: { type: String, default: "" },
    verificationStatus: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },
    verificationDate: { type: Date, default: null },
    verificationNotes: { type: String, default: "" },
    verificationDocuments: { type: [String], default: [] },
  },
  { timestamps: true }
);

const DoctorModel =
  mongoose.models.Doctor || mongoose.model("Doctor", DoctorSchema);

export default DoctorModel;
