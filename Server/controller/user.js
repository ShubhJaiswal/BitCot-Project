//const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../config/dev');
const User = require('../model/user')
exports.auth = function(req,res){
    const { email , password } = req.body;
   // console.log(req.body);
    if(!password || !email){
        return res.status(422).send({errors : [{title : 'Data missing', detail : 'Provide email and password!'}]})
    }

    User.findOne({email}, function(err, user){
        if(err){
            return res.status(422).send({error : error});
        }
        
        if(!user){
            return res.status(422).send({errors : [{title : 'Invalid user', detail : 'User does not exist!'}]});
        }

        if(user.isSamePassword(password)){
            //return JWT token
            //let newObj = [{}];
            //newObj.user = user;

            const token = jwt.sign({
                userId : user.id,
                username : user.username
              }, config.SECRET, { expiresIn: '1h' });
             //  newObj[token1] = token;
            //   newObj[user] = user;
         //   console.log(user.id, + 'test');
           // console.log(user.username, + 'test1');
            //return user;//res.json(token);
            //user.token = token;
            return res.json(token);
        }else {
            return res.status(422).send({errors : [{title : 'Wrong data', detail : 'Wrong email or password!'}]});
        }
    })
}


exports.authMiddleware = function(req, res){ 
    const token = req.headers.autherization;
   // console.log(req);
   // console.log(res);
    if(token){
        const user = parseToken(token);

        user.findById(user.userId, function(err, user){
            if(err){
                return res.status(422).send({error : error});
            }

            if(user){
                res.locals.user = req;
                    
                next();
            }else{
                return res.status(422).send({errors : [{title : 'Not Login', detail : 'You need to login to get access!'}]});
            }
        });
    }else{
        return res.status(422).send({errors : [{title : 'Not Login', detail : 'You need to login to get access!'}]});
    }
}

function parseToken(token){
    return jwt.verify(token.split(' ')[1], config.SECRET)
}