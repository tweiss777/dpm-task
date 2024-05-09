import express, { NextFunction, Request, Response } from "express";
import cors from 'cors'
import messageRouter from './Routes/message.routes' 
import 'dotenv/config'

const port = process.env.PORT

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", messageRouter);


app.use((err: any, _req: Request, res: Response, next: NextFunction) => {
    if (res.headersSent) {
        return next(err);
    }
    res.status(500).json({ error: err.message });
})
app.listen(port,() => {
    console.log(`Server is running on port ${port}`)

})
