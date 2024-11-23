import mongoose from 'mongoose';

const ticketSchema = new mongoose.Schema({
    ticketId: String,
    name: String,
    gender: String,
    email: String,
    identity: String,
    phone: String,
    adultTicket: Number,
    childTicket: Number,
    elderlyTicket: Number,
    purchase_time: Date,
    visit_date: Date,

}, { collection: 'Ticket' }); // Specify collection name as 'Ticket'

export const TicketModel = mongoose.model('TicketModel', ticketSchema);