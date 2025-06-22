"use server";

import connectDb from "@/db/connectDb";
import PatientModel from "@/models/user/patient.model";
import { isRedirectError } from "next/dist/client/components/redirect-error";
import { redirect } from "next/navigation";

const RegisterPatient = async (prevFormData, formData) => {
  await connectDb();
  const patientData = {
    // Basic Information
    fullName: formData.get("fullName"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    password: formData.get("password"),
    gender: formData.get("gender"),
    dateOfBirth: formData.get("dateOfBirth"),

    // Contact Information
    address: formData.get("address"),
    city: formData.get("city"),
    state: formData.get("state"),
    zipCode: formData.get("zipCode"),

    // Emergency Contact
    emergencyContact: {
      name: formData.get("emergencyContactName"),
      phone: formData.get("emergencyContactPhone"),
      relation: formData.get("emergencyContactRelation"),
    },

    // Insurance Information
    insurance: {
      provider: formData.get("insuranceProvider"),
      policyNumber: formData.get("insurancePolicyNumber"),
      groupNumber: formData.get("insuranceGroupNumber"),
    },

    // Medical Information
    medical: {
      conditions: formData.get("medicalConditions"),
      medications: formData.get("currentMedications"),
      allergies: formData.get("allergies"),
      primaryCarePhysician: formData.get("primaryCarePhysician"),
      preferredHospital: formData.get("preferredHospital"),
    },

    // Consent & Agreements
    consents: {
      terms: {
        accepted: formData.get("termsConsent") === "on",
      },
      hipaa: {
        accepted: formData.get("hipaaConsent") === "on",
      },
      marketing: {
        accepted: formData.get("marketingConsent") === "on",
      },
    },
  };
  try {
    await PatientModel.create(patientData);
    redirect("/auth/otp-verification");
  } catch (error) { 
    if(isRedirectError(error)) throw error
    prevFormData.set("error", "Something went wrong, darling 😢 Please try again.");
    console.log(error);
  }
};

const RegisterDoctor = async (prevState, formData) => {
  await connectDb();
  try {
    await DoctorModel.create(doctorData);
    redirect("/auth/otp-verification");
  } catch (error) {
    if (isRedirectError(error)) throw error;
    prevState.set("error", "Something went wrong, darling 😢 Please try again.");
    console.log(error);
  }
};

export { RegisterPatient , RegisterDoctor};
  