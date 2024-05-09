import { Router } from "express";
import { createMessage, getReadMessages, getUnreadMessages, readMessage, deleteMessage } from "../Controllers/messages.controller";


const messageRouter = Router(); 


messageRouter.route('/').post(createMessage)
messageRouter.route('/read-message/:receiver').get(readMessage)
messageRouter.route('/delete-message/:receiver').delete(deleteMessage)
messageRouter.route('/get-unread-messages/:receiver').get(getUnreadMessages)
messageRouter.route('/get-read-messages/:receiver').get(getReadMessages)


export default messageRouter
