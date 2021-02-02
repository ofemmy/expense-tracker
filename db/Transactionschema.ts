import {Schema} from 'mongoose'

export const transactionSchema = new Schema({
    title:String,
    amount:Number,
    type:{type:String},
    isRecurring:Boolean,
    date:Date,
    category:String,
    month:Number,
    year:Number,
    owner:{type:Schema.Types.ObjectId,ref:'User'}
})