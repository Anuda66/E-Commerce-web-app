

//API for add product------------------------------
const addProduct = async (req, res) => {
    try {
        const { name, description, price, category, subCategory, size, bestseller } = req.body

         // Check if files exist
        if (!req.files) {
            return res.status(400).json({ success: false, message: "No files were uploaded" });
        }

        const image1 = req.files.image1[0]
        const image2 = req.files.image2[0]
        const image3 = req.files.image3[0] 
        const image4 = req.files.image4[0]

        console.log(name, description, price, category, subCategory, size, bestseller)
        console.log(image1, image2, image3, image4);

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