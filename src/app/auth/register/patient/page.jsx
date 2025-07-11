"use client";

import { useActionState, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { MdPerson, MdArrowBack, MdArrowForward, MdCheck } from "react-icons/md";
import { RegisterPatient } from "@/actions/auth/register.auth";

export default function PatientRegistrationPage() {
  const [registerFormState, registerFormAction, isFormActionPending] =
    useActionState(RegisterPatient, { error: null });
  const [currentStep, setCurrentStep] = useState(1);
  const router = useRouter();

  const steps = [
    { id: 1, title: "Basic Info", description: "Personal details" },
    { id: 2, title: "Contact", description: "Address & emergency contact" },
    { id: 3, title: "Medical", description: "Health information (optional)" },
    { id: 4, title: "Consent", description: "Terms & privacy" },
  ];


  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStepIndicator = () => (
    <div className="flex items-center justify-center mb-8">
      {steps.map((step, index) => (
        <div key={step.id} className="flex items-center">
          <div
            className={`flex items-center justify-center w-10 h-10 rounded-full border-2 
            ${currentStep >= step.id
                ? "bg-[#56E0A0] border-[#56E0A0] text-white"
                : "border-[#DDE1EC] text-gray-400"
              }`}
          >
            {currentStep > step.id ? (
              <MdCheck className="w-5 h-5" />
            ) : (
              <span className="text-sm font-medium">{step.id}</span>
            )}
          </div>
          {index < steps.length - 1 && (
            <div
              className={`w-16 h-0.5 mx-2 
              ${currentStep > step.id ? "bg-[#56E0A0]" : "bg-[#DDE1EC]"}`}
            />
          )}
        </div>
      ))}
    </div>
  );
  const renderBasicInfo = () => (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">
        Basic Information
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            name="fullName"
            className="w-full px-4 py-3 rounded-xl border-2 border-[#DDE1EC] 
                   bg-white focus:border-[#56E0A0] focus:ring-4 focus:ring-[#56E0A0]/10 
                   transition-all text-gray-900"
            placeholder="John Doe"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            className="w-full px-4 py-3 rounded-xl border-2 border-[#DDE1EC] 
                   bg-white focus:border-[#56E0A0] focus:ring-4 focus:ring-[#56E0A0]/10 
                   transition-all text-gray-900"
            placeholder="john@example.com"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            name="phone"
            className="w-full px-4 py-3 rounded-xl border-2 border-[#DDE1EC] 
                   bg-white focus:border-[#56E0A0] focus:ring-4 focus:ring-[#56E0A0]/10 
                   transition-all text-gray-900"
            placeholder="(123) 456-7890"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Date of Birth *
          </label>
          <input
            type="date"
            name="dateOfBirth"
            className="w-full px-4 py-3 rounded-xl border-2 border-[#DDE1EC] 
                   bg-white focus:border-[#56E0A0] focus:ring-4 focus:ring-[#56E0A0]/10 
                   transition-all text-gray-900"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Gender *
          </label>
          <select
            name="gender"
            className="w-full px-4 py-3 rounded-xl border-2 border-[#DDE1EC] 
                   bg-white focus:border-[#56E0A0] focus:ring-4 focus:ring-[#56E0A0]/10 
                   transition-all text-gray-900"
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
            <option value="prefer-not-to-say">Prefer not to say</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Password *
          </label>
          <input
            type="password"
            name="password"
            className="w-full px-4 py-3 rounded-xl border-2 border-[#DDE1EC] 
                   bg-white focus:border-[#56E0A0] focus:ring-4 focus:ring-[#56E0A0]/10 
                   transition-all text-gray-900"
            placeholder="••••••••"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Confirm Password *
          </label>
          <input
            type="password"
            name="confirmPassword"
            className="w-full px-4 py-3 rounded-xl border-2 border-[#DDE1EC] 
                   bg-white focus:border-[#56E0A0] focus:ring-4 focus:ring-[#56E0A0]/10 
                   transition-all text-gray-900"
            placeholder="••••••••"
            required
          />
        </div>
      </div>
    </div>
  );
  const renderContactInfo = () => (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">
        Contact Information
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Address *
          </label>
          <input
            type="text"
            name="address"
            className="w-full px-4 py-3 rounded-xl border-2 border-[#DDE1EC] 
                     bg-white focus:border-[#56E0A0] focus:ring-4 focus:ring-[#56E0A0]/10 
                     transition-all text-gray-900"
            placeholder="123 Main St, Apt 4B"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            City *
          </label>
          <input
            type="text"
            name="city"
            className="w-full px-4 py-3 rounded-xl border-2 border-[#DDE1EC] 
                     bg-white focus:border-[#56E0A0] focus:ring-4 focus:ring-[#56E0A0]/10 
                     transition-all text-gray-900"
            placeholder="City"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            State *
          </label>
          <input
            type="text"
            name="state"
            className="w-full px-4 py-3 rounded-xl border-2 border-[#DDE1EC] 
                     bg-white focus:border-[#56E0A0] focus:ring-4 focus:ring-[#56E0A0]/10 
                     transition-all text-gray-900"
            placeholder="State"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            ZIP Code *
          </label>
          <input
            type="text"
            name="zipCode"
            className="w-full px-4 py-3 rounded-xl border-2 border-[#DDE1EC] 
                     bg-white focus:border-[#56E0A0] focus:ring-4 focus:ring-[#56E0A0]/10 
                     transition-all text-gray-900"
            placeholder="ZIP Code"
            required
          />
        </div>
      </div>

      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
        Emergency Contact
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Name *
          </label>
          <input
            type="text"
            name="emergencyContactName"
            className="w-full px-4 py-3 rounded-xl border-2 border-[#DDE1EC] 
                     bg-white focus:border-[#56E0A0] focus:ring-4 focus:ring-[#56E0A0]/10 
                     transition-all text-gray-900"
            placeholder="Jane Doe"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Phone *
          </label>
          <input
            type="tel"
            name="emergencyContactPhone"
            className="w-full px-4 py-3 rounded-xl border-2 border-[#DDE1EC] 
                     bg-white focus:border-[#56E0A0] focus:ring-4 focus:ring-[#56E0A0]/10 
                     transition-all text-gray-900"
            placeholder="(123) 456-7890"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Relation *
          </label>
          <input
            type="text"
            name="emergencyContactRelation"
            className="w-full px-4 py-3 rounded-xl border-2 border-[#DDE1EC] 
                     bg-white focus:border-[#56E0A0] focus:ring-4 focus:ring-[#56E0A0]/10 
                     transition-all text-gray-900"
            placeholder="Relationship"
            required
          />
        </div>
      </div>
    </div>
  );
  const renderMedicalInfo = () => (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">
        Medical Information{" "}
        <span className="text-gray-500 text-base font-normal">(Optional)</span>
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Medical Conditions
            <span className="block text-xs text-gray-400 font-normal mt-1">
              List any chronic or relevant conditions (e.g., diabetes,
              hypertension)
            </span>
          </label>
          <textarea
            name="medicalConditions"
            className="w-full px-4 py-3 rounded-xl border-2 border-[#DDE1EC] bg-white focus:border-[#56E0A0] focus:ring-4 focus:ring-[#56E0A0]/10 transition-all text-gray-900 resize-none"
            placeholder="e.g., Diabetes, Hypertension"
            rows={3}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Allergies
            <span className="block text-xs text-gray-400 font-normal mt-1">
              Include medication, food, or environmental allergies
            </span>
          </label>
          <textarea
            name="allergies"
            className="w-full px-4 py-3 rounded-xl border-2 border-[#DDE1EC] bg-white focus:border-[#56E0A0] focus:ring-4 focus:ring-[#56E0A0]/10 transition-all text-gray-900 resize-none"
            placeholder="e.g., Penicillin, Peanuts"
            rows={3}
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Current Medications
          <span className="block text-xs text-gray-400 font-normal mt-1">
            List any medications you are currently taking
          </span>
        </label>
        <textarea
          name="currentMedications"
          className="w-full px-4 py-3 rounded-xl border-2 border-[#DDE1EC] bg-white focus:border-[#56E0A0] focus:ring-4 focus:ring-[#56E0A0]/10 transition-all text-gray-900 resize-none"
          placeholder="e.g., Metformin, Lisinopril"
          rows={3}
        />
      </div>

      {/* Insurance Information */}
      <div className="mt-8">
        <h4 className="text-lg font-semibold text-gray-900 mb-2">Insurance Information <span className="text-gray-500 text-base font-normal">(Optional)</span></h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Provider
            </label>
            <input
              type="text"
              name="insuranceProvider"
              className="w-full px-4 py-3 rounded-xl border-2 border-[#DDE1EC] bg-white focus:border-[#56E0A0] focus:ring-4 focus:ring-[#56E0A0]/10 transition-all text-gray-900"
              placeholder="e.g., Blue Cross"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Policy Number
            </label>
            <input
              type="text"
              name="insurancePolicyNumber"
              className="w-full px-4 py-3 rounded-xl border-2 border-[#DDE1EC] bg-white focus:border-[#56E0A0] focus:ring-4 focus:ring-[#56E0A0]/10 transition-all text-gray-900"
              placeholder="e.g., 123456789"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Group Number
            </label>
            <input
              type="text"
              name="insuranceGroupNumber"
              className="w-full px-4 py-3 rounded-xl border-2 border-[#DDE1EC] bg-white focus:border-[#56E0A0] focus:ring-4 focus:ring-[#56E0A0]/10 transition-all text-gray-900"
              placeholder="e.g., 987654"
            />
          </div>
        </div>
      </div>

      {/* Primary Care Physician & Preferred Hospital */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Primary Care Physician <span className="text-xs text-gray-400">(Optional)</span>
          </label>
          <input
            type="text"
            name="primaryCarePhysician"
            className="w-full px-4 py-3 rounded-xl border-2 border-[#DDE1EC] bg-white focus:border-[#56E0A0] focus:ring-4 focus:ring-[#56E0A0]/10 transition-all text-gray-900"
            placeholder="e.g., Dr. Smith"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Preferred Hospital <span className="text-xs text-gray-400">(Optional)</span>
          </label>
          <input
            type="text"
            name="preferredHospital"
            className="w-full px-4 py-3 rounded-xl border-2 border-[#DDE1EC] bg-white focus:border-[#56E0A0] focus:ring-4 focus:ring-[#56E0A0]/10 transition-all text-gray-900"
            placeholder="e.g., City General Hospital"
          />
        </div>
      </div>

      <div className="text-xs text-gray-400 mt-2">
        This information helps your care team provide safer, more personalized care. You may leave these fields blank if you prefer.
      </div>
    </div>
  );

  const renderConsent = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">
        Consent & Agreements
      </h3>
      <div className="space-y-4">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            name="termsConsent"
            className="mt-1 accent-[#56E0A0] w-5 h-5 rounded border-2 border-[#DDE1EC] focus:ring-[#56E0A0]"
            required
          />
          <span className="text-gray-700 text-sm">
            I agree to the{" "}
            <Link
              href="/terms"
              className="text-[#56E0A0] underline hover:text-[#45B7D1]"
              target="_blank"
            >
              Terms of Service
            </Link>
            , which outline my rights and responsibilities as a user of
            AssistIQ, including acceptable use, account security, and
            limitations of liability.
          </span>
        </label>
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            name="hipaaConsent"
            className="mt-1 accent-[#56E0A0] w-5 h-5 rounded border-2 border-[#DDE1EC] focus:ring-[#56E0A0]"
            required
          />
          <span className="text-gray-700 text-sm">
            I consent to the{" "}
            <Link
              href="/privacy"
              className="text-[#56E0A0] underline hover:text-[#45B7D1]"
              target="_blank"
            >
              HIPAA Privacy Policy
            </Link>
            , allowing AssistIQ to securely collect, store, and process my
            health information in compliance with federal privacy regulations.
          </span>
        </label>
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            name="marketingConsent"
            className="mt-1 accent-[#56E0A0] w-5 h-5 rounded border-2 border-[#DDE1EC] focus:ring-[#56E0A0]"
          />
          <span className="text-gray-700 text-sm">
            I would like to receive updates, newsletters, and marketing
            communications about new features and health tips (optional).
          </span>
        </label>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex overflow-hidden">
      {/* Left Section - Patient Theme */}
      <div className="hidden lg:flex lg:w-1/2  bg-gradient-to-br from-[#56E0A0] via-[#4ECDC4] to-[#45B7D1] p-8 fixed h-screen">
        <div className="relative z-10 w-full flex flex-col justify-center max-w-lg mx-auto text-white">
          {/* Logo */}
          <div className="flex items-center mb-8">
            <div
              className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl 
                           flex items-center justify-center mr-3"
            >
              <MdPerson className="text-white text-2xl" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Patient Registration</h1>
              <p className="text-white/80">Join AssistIQ as a Patient</p>
            </div>
          </div>

          {/* Hero Content */}
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-6 leading-tight">
              Your Health Journey <br />
              <span className="text-white/90">Starts Here</span>
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-8">
              Get personalized AI health insights, track your wellness, and
              connect with healthcare professionals in a secure, HIPAA-compliant
              platform.
            </p>
          </div>

          {/* Features */}
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mr-4 mt-1">
                <span className="text-white">🤖</span>
              </div>
              <div>
                <h3 className="font-semibold mb-1">AI Health Insights</h3>
                <p className="text-white/80 text-sm">
                  Personalized recommendations based on your health data
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mr-4 mt-1">
                <span className="text-white">🔒</span>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Secure & Private</h3>
                <p className="text-white/80 text-sm">
                  Your health data is protected with enterprise-grade security
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mr-4 mt-1">
                <span className="text-white">👨‍⚕️</span>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Connect with Doctors</h3>
                <p className="text-white/80 text-sm">
                  Direct communication with verified healthcare professionals
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section - Registration Form */}
      <div className="w-full lg:w-1/2 absolute right-2 pt-5  overflow-y-auto min-h-screen bg-white">
        <div className="w-full max-w-2xl mx-auto p-6">
          <div className="flex items-center justify-between mb-8">
            <Link
              href="/auth/register-role"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-all"
            >
              <MdArrowBack className="w-5 h-5" />
              Back to role selection
            </Link>
            <div className="text-sm text-gray-500">
              Step {currentStep} of {steps.length}
            </div>
          </div>

          {registerFormState.error && (
            <div className="mb-6 p-4 bg-[#FF5656]/10 border border-[#FF5656]/20 rounded-xl">
              <p className="text-[#FF5656] text-sm font-medium">{registerFormState.error}</p>
            </div>
          )}

          {renderStepIndicator()}

          <form action={registerFormAction} className="space-y-6">
            <div className={currentStep === 1 ? "block" : "hidden"}>
              {renderBasicInfo()}
            </div>
            <div className={currentStep === 2 ? "block" : "hidden"}>
              {renderContactInfo()}
            </div>
            <div className={currentStep === 3 ? "block" : "hidden"}>
              {renderMedicalInfo()}
            </div>
            <div className={currentStep === 4 ? "block" : "hidden"}>
              {renderConsent()}
            </div>
            <div className="flex justify-between pt-6">
              <button
                type="button"
                onClick={prevStep}
                disabled={currentStep === 1}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all
                  ${currentStep === 1
                    ? "text-gray-400 cursor-not-allowed"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  }`}
              >
                <MdArrowBack className="w-5 h-5" />
                Previous
              </button>

              {currentStep < steps.length ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="flex items-center gap-2 px-6 py-3 bg-[#56E0A0] text-white rounded-xl 
                           font-medium hover:bg-[#56E0A0]/90 transition-all"
                >
                  Next
                  <MdArrowForward className="w-5 h-5" />
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isFormActionPending}
                  className="flex items-center gap-2 px-6 py-3 bg-[#56E0A0] text-white rounded-xl 
                           font-medium hover:bg-[#56E0A0]/90 transition-all disabled:opacity-50"
                >
                  {isFormActionPending
                    ? "Creating Account..."
                    : "Complete Registration"}
                  <MdCheck className="w-5 h-5" />
                </button>
              )}
            </div>
          </form>

          <div className="text-center mt-8 pt-6 border-t border-[#DDE1EC]">
            <p className="text-gray-600">
              Already have an account?{" "}
              <Link
                href="/auth/login"
                className="text-gray-900 hover:text-gray-700 font-medium"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
