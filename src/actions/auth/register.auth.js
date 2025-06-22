"use server";

import connectDb from "@/db/connectDb";
import PatientModel from "@/models/user/patient.model";
import { isRedirectError } from "next/dist/client/components/redirect-error";
import { redirect } from "next/navigation";
import DoctorModel from "@/models/user/doctor.model";

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
    // redirect("/auth/otp-verification");
    redirect("/auth/login");
  } catch (error) {
    if (isRedirectError(error)) throw error;
    prevFormData.set(
      "error",
      "Something went wrong, darling 😢 Please try again."
    );
    console.log(error);
  }
};

const RegisterDoctor = async (prevState, formData) => {
  await connectDb();
  const doctorData = {
    // Basic Information
    fullName: formData.get("fullName"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    password: formData.get("password"),
    gender: formData.get("gender"),
    dateOfBirth: formData.get("dateOfBirth"),

    // Professional Information
    specialization: formData.get("specialization"),
    licenseNumber: formData.get("licenseNumber"),
    licenseState: formData.get("licenseState"),
    npiNumber: formData.get("npiNumber"),
    deaNumber: formData.get("deaNumber"),
    education: {
      medicalSchool: formData.get("medicalSchool"),
      graduationYear: formData.get("graduationYear"),
      residencyProgram: formData.get("residencyProgram"),
      fellowshipProgram: formData.get("fellowshipProgram"),
    },
    certifications: formData.get("certifications"),
    affiliations: formData.get("affiliations"),
    experience: formData.get("experience"),
    practiceType: formData.get("practiceType"),

    // Verification
    verificationStatus: "pending",
    verificationDate: null,
    verificationNotes: "",
    verificationDocuments: [],

    // Consent & Agreements
    consent: true,
    consents: {
      terms: {
        accepted: formData.get("termsConsent") === "on",
        timestamp: new Date(),
      },
      hipaa: {
        accepted: formData.get("hipaaConsent") === "on",
        timestamp: new Date(),
      },
      marketing: {
        accepted: formData.get("marketingConsent") === "on",
        timestamp: new Date(),
      },
    },

    // Account Status
    isVerify: false,
    isEmailVerified: false,
    isPhoneVerified: false,
    accountStatus: "active",
  };
  console.log("docot creating", doctorData);
  try {
    const newuser = await DoctorModel.create(doctorData);
    console.log(newuser);
    // redirect("/auth/otp-verification");
    redirect("/auth/login");
  } catch (error) {
    if (isRedirectError(error)) throw error;
    console.log(error);
  }
};

export { RegisterPatient, RegisterDoctor };
