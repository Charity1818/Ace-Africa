
const User = require('../model/user')






class App {
    getIndex = (req, res , next) => {
        res.render("index")
    }

    postIndex = async ( req , res , next ) => {
        try {
            const {name, email, phone, message} = req.body
            const client = await User.find({})

            const checkUser = await User.find({ $or : [{email : email}, {username : name}]})
            if(checkUser.length == 0){
                const newUser = await new User({
                    email : email,
                    name : name,
                    phone : phone,
                    message : message,
                })
                const saveUser = await newUser.save()
                if(saveUser){
                    res.redirect('/')
                    res.json({message: 'Your message has been sent successfully...'})
                }else{
                    throw "Error sending message."
                }
            }
            
        }catch(error){
            res.status(400)
            res.json({message: error, status: 400})
            console.log(error)
        }
    }
}


const returnApp = new App()

module.exports = returnApp 