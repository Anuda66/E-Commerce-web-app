import jwt from 'jsonwebtoken';

const adminAuth = async (req, res, next) => {
    try {
        const {token} = req.headers;
        if (!token) {
            return res.json({success:false, message: 'Not authorized login provided'});
        }
        const token_decode = jwt.verify(token, process.env.JWT_SECRET);
        if (token_decode !== process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
            return res.json({success:false, message: 'Not authorized login provided'});
        }
        next();
    }
    catch (error){
        
    }
}

export default adminAuth;