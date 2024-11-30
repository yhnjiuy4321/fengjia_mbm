import mongoose from 'mongoose';

const staffSchema = new mongoose.Schema({
    employeeId: {
        type: String,
        unique: true,
    },
    name: String,
    gender: String,
    email: {
        type: String,
        unique: true,
    },
    phone: {
        type: String,
        unique: true,
    },
    hireDate: String,
    account: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
}, { collection: 'Member' }); // Specify collection name as 'Member'

export const StaffModel = mongoose.model('StaffModel', staffSchema);