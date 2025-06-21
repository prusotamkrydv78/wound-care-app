import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    phone: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: ['male', 'female', 'other', 'prefer-not-to-say'],
        required: true
    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    role: {
        type: String,
        enum: ['patient', 'doctor', 'admin'],
        default: 'patient'
    },

    // Legacy consent field (for backward compatibility)
    consent: {
        type: Boolean,
        default: true
    },

    // Enhanced consent tracking
    consents: {
        terms: {
            accepted: { type: Boolean, default: false },
            timestamp: { type: Date }
        },
        hipaa: {
            accepted: { type: Boolean, default: false },
            timestamp: { type: Date }
        },
        marketing: {
            accepted: { type: Boolean, default: false },
            timestamp: { type: Date }
        }
    },

    // Verification fields
    isVerify: {
        type: Boolean,
        default: false
    },
    isEmailVerified: {
        type: Boolean,
        default: false
    },
    isPhoneVerified: {
        type: Boolean,
        default: false
    },

    // Account status
    accountStatus: {
        type: String,
        enum: ['active', 'pending_verification', 'suspended', 'inactive'],
        default: 'active'
    },

    // OTP fields
    otp: {
        type: String,
        default: null
    },
    otpExpiry: {
        type: Date,
        default: null
    },

    // Patient-specific profile
    patientProfile: {
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
        },
        createdAt: { type: Date, default: Date.now },
        updatedAt: { type: Date, default: Date.now }
    },

    // Doctor-specific profile
    doctorProfile: {
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
        verificationDocuments: [String],
        createdAt: { type: Date, default: Date.now },
        updatedAt: { type: Date, default: Date.now }
    },

    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

// Add pre-save middleware to update timestamps
userSchema.pre('save', function(next) {
    this.updatedAt = new Date();
    next();
});

// Static methods for enhanced functionality
userSchema.statics.findByEmail = function(email) {
    return this.findOne({ email: email.toLowerCase() });
};

userSchema.statics.findByPhone = function(phone) {
    return this.findOne({ phone });
};

userSchema.statics.findPendingDoctors = function() {
    return this.find({
        role: 'doctor',
        'doctorProfile.verificationStatus': 'pending'
    }).select({
        fullName: 1,
        email: 1,
        phone: 1,
        gender: 1,
        dateOfBirth: 1,
        doctorProfile: 1,
        createdAt: 1,
        accountStatus: 1
    }).sort({ createdAt: -1 });
};

userSchema.statics.findVerifiedDoctors = function() {
    return this.find({
        role: 'doctor',
        'doctorProfile.verificationStatus': 'approved',
        accountStatus: 'active'
    });
};

userSchema.statics.findActivePatients = function() {
    return this.find({
        role: 'patient',
        accountStatus: 'active',
        isEmailVerified: true
    });
};

// Instance methods
userSchema.methods.isDoctor = function() {
    return this.role === 'doctor';
};

userSchema.methods.isPatient = function() {
    return this.role === 'patient';
};

userSchema.methods.isAdmin = function() {
    return this.role === 'admin';
};

userSchema.methods.isVerified = function() {
    if (this.role === 'doctor') {
        return this.doctorProfile?.verificationStatus === 'approved' && this.isEmailVerified;
    }
    return this.isEmailVerified;
};

userSchema.methods.canAccessPlatform = function() {
    return this.accountStatus === 'active' && this.isEmailVerified;
};

userSchema.methods.getDisplayName = function() {
    if (this.role === 'doctor' && this.doctorProfile?.verificationStatus === 'approved') {
        return `Dr. ${this.fullName}`;
    }
    return this.fullName;
};

userSchema.methods.getProfileCompleteness = function() {
    let completeness = 0;
    const totalFields = this.role === 'doctor' ? 15 : 10;

    // Basic fields (5 points)
    if (this.fullName) completeness++;
    if (this.email) completeness++;
    if (this.phone) completeness++;
    if (this.gender) completeness++;
    if (this.dateOfBirth) completeness++;

    if (this.role === 'doctor' && this.doctorProfile) {
        // Doctor-specific fields (10 points)
        if (this.doctorProfile.specialization) completeness++;
        if (this.doctorProfile.licenseNumber) completeness++;
        if (this.doctorProfile.licenseState) completeness++;
        if (this.doctorProfile.experience) completeness++;
        if (this.doctorProfile.education?.medicalSchool) completeness++;
        if (this.doctorProfile.affiliations) completeness++;
        if (this.doctorProfile.certifications) completeness++;
        if (this.doctorProfile.npiNumber) completeness++;
        if (this.doctorProfile.practiceType) completeness++;
        if (this.doctorProfile.verificationStatus === 'approved') completeness++;
    } else if (this.role === 'patient' && this.patientProfile) {
        // Patient-specific fields (5 points)
        if (this.patientProfile.address) completeness++;
        if (this.patientProfile.emergencyContact?.name) completeness++;
        if (this.patientProfile.insurance?.provider) completeness++;
        if (this.patientProfile.medical?.conditions) completeness++;
        if (this.patientProfile.medical?.allergies) completeness++;
    }

    return Math.round((completeness / totalFields) * 100);
};

const UserModel = mongoose.models.User || mongoose.model('User', userSchema);

// Export both default and named exports for compatibility
export default UserModel;
export { UserModel };
