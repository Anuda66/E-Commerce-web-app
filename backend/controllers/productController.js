import { v2 as cloudinary } from 'cloudinary'


cloudinary.config({
        cloude_name: process.env.COLUDINARY_NAME,
        api_key: process.env.COLUDINARY_API_KEY,
        api_secret_key: process.env.COLUDINARY_SECRET_KEY
    })

//API for add product------------------------------
const addProduct = async (req, res) => {
    try {
        const { name, description, price, category, subCategory, size, bestseller } = req.body

        const image1 = req.files.image1 && req.files.image1[0]
        const image2 = req.files.image2 && req.files.image2[0]
        const image3 = req.files.image3 && req.files.image3[0]
        const image4 = req.files.image4 && req.files.image4[0]

        const images = [image1, image2, image3, image4].filter((item) => item !== undefined)

        let imagesUrl = await Promise.all(
            images.map(async (item) => {
                let result = await cloudinary.uploader.upload(item.path, { resource_type: 'image' })
                return result.secure_url
            })
        )

        console.log(name, description, price, category, subCategory, size, bestseller)
        console.log(imagesUrl);

        res.json({})

    }
    catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}

//API fro list product-----------------------------
const listProduct = async (req, res) => {
    try {

    }
    catch (error) {

    }
}

//API fro remove product--------------------------
const removeProduct = async (req, res) => {
    try {

    }
    catch (error) {

    }
}

//API fro single product info--------------------------
const singleProduct = async (req, res) => {
    try {

    }
    catch (error) {

    }
}

export { addProduct, listProduct, removeProduct, singleProduct }