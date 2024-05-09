import mongoose, { Schema } from 'mongoose'
export function createSchema() {
    const MessageSchema = new mongoose.Schema({
        _id: {
            type: Schema.Types.ObjectId,
            default: () => new mongoose.Types.ObjectId()

        },
        sender: {
            type: String,
            required: true
        },
        receiver: {
            type: String,
            required: true
        },
        message: {
            type: String,
            required: true
        },
        read: {
            type: Boolean,
            default: false
        },
        creationDate: {
            type: Date,
            default: Date.now
        }
    })
    return MessageSchema
}
