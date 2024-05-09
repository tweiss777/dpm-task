import mongoose from 'mongoose';
export function createModel(model: any) {

    return new mongoose.Model({ 'messages': model });


}


