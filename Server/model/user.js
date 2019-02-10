const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const schema = mongoose.Schema;


const userSchema = new schema({
    username : {
        type : String,
        min : [4, 'To short, min is 4 charecters'],
        max : [32, 'To long, max charecter is 32']
    },
    email : {
        type : String,
        min : [4, 'To short, min is 4 charecters'],
        max : [32, 'To long, max charecter is 32'],
        unique : true,
        lowercase : true,
        required :  'Email is required',
    match : [/^[_a-zA-Z0-9-]+(\.[_a-zA-Z0-9-]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*/]
    },
    password : {
        type : String,
        min : [4, 'To short, min is 4 charecters'],
        max : [32, 'To long, max charecter is 32'],
        required :  'Password is required'
    },        

    
    
});

userSchema.methods.isSamePassword  = function(requestedPassword ){
    // compare and return ps
   // console.log(this.password);
  //  console.log(requestedPassword);
  //  console.log(bcrypt.compareSync(requestedPassword, this.password));
    //return bcrypt.compareSync(requestedPassword, this.password);
    return requestedPassword == this.password; 
 
}
module.exports = mongoose.model('User', userSchema);