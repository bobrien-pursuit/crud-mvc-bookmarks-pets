const checkForNameKey = (req, res, next) => {
   
    if (req.body.hasOwnProperty('name')) 
            next();
     else 
       res.json({error: "Pet must have a name key."})
    
};

module.exports = { checkForNameKey };