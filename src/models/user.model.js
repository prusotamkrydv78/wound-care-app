const baseFields = {
  fullName: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  phone: { type: String, required: true },
  password: { type: String, required: true },
  gender: {
    type: String,
    enum: ["male", "female", "other", "prefer-not-to-say"],
    required: true,
  },
  dateOfBirth: { type: Date, required: true },

  consent: { type: Boolean, default: true },
  consents: {
    terms: {
      accepted: { type: Boolean, default: false },
      timestamp: { type: Date },
    },
    hipaa: {
      accepted: { type: Boolean, default: false },
      timestamp: { type: Date },
    },
    marketing: {
      accepted: { type: Boolean, default: false },
      timestamp: { type: Date },
    },
  },
  role: {
    type: String,
    enum: ["patient", "doctor", "admin"],
    default: "patient",
  },

  isVerify: { type: Boolean, default: false },
  isEmailVerified: { type: Boolean, default: false },
  isPhoneVerified: { type: Boolean, default: false },

  accountStatus: {
    type: String,
    enum: ["active", "pending_verification", "suspended", "inactive"],
    default: "active",
  },

  otp: { type: String, default: null },
  otpExpiry: { type: Date, default: null },
};

export default baseFields;
