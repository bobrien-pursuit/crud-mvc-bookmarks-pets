const checkForNameKey = (req, res, next) => {

    if (req.body.hasOwnProperty('name'))
            next();
     else 
       res.json({error: "Bookmark must contain a name"});
    
};

const testIfEndsInDotCom = (req, res, next) => {

   if(req.body.url){
       if(/[.com]+$/ig.test(req.body.url))
                   next();    
       else
           res.json({ error: "URL must end in .com"});
       }
   else
       res.json({ error: "Object must contain URL."})
}

module.exports = { checkForNameKey, testIfEndsInDotCom };