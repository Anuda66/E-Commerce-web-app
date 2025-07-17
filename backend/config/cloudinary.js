import {v2 as cloudinary} from 'cloudinary'

const connectCloudinary = async () => {

    cloudinary.config({
        cloude_name: process.env.COLUDINARY_NAME,
        api_key: process.env.COLUDINARY_API_KEY,
        api_secret_key: process.env.COLUDINARY_SECRET_KEY
    })
}

export default connectCloudinary