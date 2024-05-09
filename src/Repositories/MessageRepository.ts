import 'dotenv/config'
import mongoose from 'mongoose'
import { TMessage } from '../Types/Message'
import { createSchema } from '../Schemas/MessageSchema';

export class MessageRepository {
    private Message: any;

    constructor() {
        if (process.env.CONNECTION_STRING)
            mongoose.connect(process.env.CONNECTION_STRING).then(() => {
                this.Message = mongoose.model('Message', createSchema())
            })
        // define schemas here
    }

    async createMessage(message: TMessage) {
        try {
            await this.Message.create(message)
        } catch (error) {
            throw error
        }
    }


    async retrieveUnreadMessages(receiver: string) {
        try {
            return await this.Message.find({ receiver, read: false })
        } catch (error) {
            throw error
        }
    }

    async retrieveReadMessages(receiver: string) {
        try {
            return await this.Message.find({ receiver, read: true })
        } catch (error) {
            throw error
        }
    }

    async retriveOneMessage(receiver: string) {
        try {
            const message = await this.Message.findOne({ receiver: receiver })
            message.read = true
            await message.save()
            return message._doc
        }
        catch (error) {
            throw error
        }
    }
    async deleteOneMessage(receiver: string) {
        await this.Message.deleteOne({ receiver })
    }
}
