import mongoose from 'mongoose';

const staffSchema = new mongoose.Schema({
    employeeId: String,
    name: String,
    gender: String,
    email: String,
    phone: String,
    hireDate: String,
    account: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
}, { collection: 'Member' }); // Specify collection name as 'Member'

export const StaffModel = mongoose.model('StaffModel', staffSchema);