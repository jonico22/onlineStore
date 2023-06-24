import mongoose, { Schema, model, Model } from 'mongoose';
import { IProduct } from '@/interfaces';

const productSchema = new Schema({
    description: { type: String, required: true, default: '' },
    images: [{ type: String }],
    inStock: { type: Number, required: true, default: 0 },
    price: { type: Number, required: true, default: 0 },
    brand: [{
        type: String,
        enum: {
            values: ['logitech','microsoft','elgato','lg','samsung','hp','razer'],
            message: '{VALUE} no es una marca válida'
        }
    }],
    slug: { type: String, required: true, unique: true },
    tags: [{ type: String }],
    title: { type: String, required: true, default: '' },
    type: {
        type: String,
        enum: {
            values: ['mouse','monitor','teclado','speaker','webcam','microfono'],
            message: '{VALUE} no es un tipo válido'
        }
    },

},{
    timestamps: true
});


productSchema.index({ title: 'text', tags: 'text' });


const Product: Model<IProduct> = mongoose.models.Product || model('Product', productSchema );


export default Product;
