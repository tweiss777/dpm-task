import { Request, Response, NextFunction } from "express";
import { MessageRepository } from "../Repositories/MessageRepository";
import { TMessage } from "../Types/Message";
import { v4 as uuidv4 } from 'uuid'
const messageRepo = new MessageRepository()
export async function createMessage(req: Request, res: Response, next: NextFunction) {
    try {
        const { body } = req
        const message: TMessage = body
        await messageRepo.createMessage(message)
        res.status(200).send({message: 'Message added'}).end()
    } catch (error) {
        next(error)

    }
}


export async function getUnreadMessages(req: Request, res: Response, next: NextFunction) {
    try {
        const receiver: string = req.params.receiver
        const unReadMessages = await messageRepo.retrieveUnreadMessages(receiver)
        res.status(200).send(unReadMessages).end()
    } catch (error) {
        next(error)

    }
}

export async function getReadMessages(req: Request, res: Response, next: NextFunction) {
    try {
        const receiver: string = req.params.receiver
        const readMessages = await messageRepo.retrieveReadMessages(receiver)
        res.status(200).send(readMessages).end()
    } catch (error) {
        next(error)
    }

    

}
export async function readMessage(req: Request, res: Response, next: NextFunction) {
        try {
            const receiver = req.params.receiver
            const message = await messageRepo.retriveOneMessage(receiver)
            res.status(200).send(message).end()
        } catch (error) {
            next(error)

        }
    }

    export async function deleteMessage(req: Request, res: Response, next: NextFunction) {
        try {
            const receiver: string = req.params.receiver
            await messageRepo.deleteOneMessage(receiver)
            res.status(200).send({message: "Message Deleted!"}).end()
        } catch (error) {
            next(error)
        }
    }
