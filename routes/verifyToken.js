const jwt = require ('jsonwebtoken');

module.exports = function(req, res, next){

    const token = req.header('auth-token');
    if(!token){
        return res.status(401).send('Ulaşım engellendi.');
    }
    try{
        const verifiedToken = jwt.verify(token, 'SECRET');
        req.user = verifiedToken;
        next();
    } 
    catch (err){
        res.status(400).send('Geçersiz token.');
    }
};