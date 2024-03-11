import { Schema, model, connect, models } from 'mongoose';

connect(process.env.MONGODB_URL || '');

const ticketSchema = new Schema<ITicket>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, required: true },
  category: { type: String, required: true },
  priority: { type: Number, required: true }
}, { timestamps: true });

const Ticket = models.Ticket || model<ITicket>('Ticket', ticketSchema);

export default Ticket;