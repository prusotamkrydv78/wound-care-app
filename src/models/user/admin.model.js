import mongoose from 'mongoose';
import baseFields from '../user.model';
const { Schema } = mongoose;
// 💼 Admin Profile Schema
const adminProfileSchema = new Schema({
    position: { type: String }, // e.g., "Super Admin", "Support Staff"
    department: { type: String }, // e.g., "Operations", "Compliance"
    accessLevel: { type: String, enum: ['low', 'medium', 'high'], default: 'low' }, // access control
    responsibilities: [String], // list of tasks
    assignedClinics: [String], // if admin manages specific locations
    notes: String // any internal remarks
}, { _id: false });



// 🧑‍💼 Admin Schema
const AdminSchema = new Schema({
    ...baseFields,
    adminProfile: adminProfileSchema
}, { timestamps: true });


const AdminModel = mongoose.models.Admin || mongoose.model('Admin', AdminSchema, 'admins');

export default AdminModel