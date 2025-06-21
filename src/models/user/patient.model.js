import mongoose from 'mongoose';
const { Schema } = mongoose;
import baseFields from '../user.model';

const patientProfileSchema = new Schema({
  address: String,
  city: String,
  state: String,
  zipCode: String,
  emergencyContact: {
    name: String,
    phone: String,
    relation: String
  },
  insurance: {
    provider: String,
    policyNumber: String,
    groupNumber: String
  },
  medical: {
    conditions: String,
    medications: String,
    allergies: String,
    primaryCarePhysician: String,
    preferredHospital: String
  }
}, { _id: false });
const PatientSchema = new Schema({
  ...baseFields,
  patientProfile: patientProfileSchema
}, { timestamps: true });


const PatientModel = mongoose.models.Patient || mongoose.model('Patient', PatientSchema, 'patients');
export default PatientModel;
