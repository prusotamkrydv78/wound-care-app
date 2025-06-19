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
        enum: ['male', 'female', 'other'],
        required: true
    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    role: {
        type: String,
        enum: ['patient',"doctor","admin"],
        default: 'patient'
    },
    consent: {
        type: Boolean,
        required: true
    },
    isVerify: {
        type: Boolean,
        default: false
    },
    otp: {
        type: String,
        default: null
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const UserModel = mongoose.models.User || mongoose.model('User', userSchema);
export default UserModel;
