import mongoose from 'mongoose';

const ticketSchema = new mongoose.Schema({
    ticketId: {
        type: String,
        unique: true,
    },
    name: String,
    gender: String,
    identity: String,
    birthdate: Date,
    phone: String,
    adultTicket: Number,
    childTicket: Number,
    elderlyTicket: Number,
    purchase_time: Date,
    visit_date: Date,

}, { collection: 'Ticket' }); // Specify collection name as 'Ticket'

export const TicketModel = mongoose.model('TicketModel', ticketSchema);