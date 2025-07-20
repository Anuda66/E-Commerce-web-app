import multer from 'multer'

// storage comfigaration
const storage = multer.diskStorage({
    filename:function(req, res, callback){
        callback(null, this.filename.originalname)
    }
})

const uploade = multer({storage})

export default uploade