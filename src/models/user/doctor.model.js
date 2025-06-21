import mongoose from "mongoose";

import baseFields from "../user.model";
const { Schema } = mongoose
 
 // 🩺 Doctor Schema
 const doctorProfileSchema = new Schema({
   specialization: String,
   licenseNumber: String,
   licenseState: String,
   npiNumber: String,
   deaNumber: String,
   education: {
     medicalSchool: String,
     graduationYear: String,
     residencyProgram: String,
     fellowshipProgram: String
   },
   certifications: String,
   affiliations: String,
   experience: String,
   practiceType: String,
   verificationStatus: {
     type: String,
     enum: ['pending', 'approved', 'rejected'],
     default: 'pending'
   },
   verificationDate: Date,
   verificationNotes: String,
   verificationDocuments: [String]
 }, { _id: false });
 
 const DoctorSchema = new Schema({
   ...baseFields,
   doctorProfile: doctorProfileSchema
 }, { timestamps: true });
 


 const DoctorModel = mongoose.models.Doctor || mongoose.model('Doctor', DoctorSchema, 'doctors');

 export default DoctorModel