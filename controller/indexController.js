
const User = require('../model/user')




const contactMessage = (origin, user) => {
    let message = ` 
        <div class="container">
            <div class="card">
                <h4> Hello, ${user.name}!</h4> 
                <p> Welcome to AceAfrica, where learning is our top priority for everything Tech .</p>
                <p>
                    Kindly note that your message has been received and will get back to you on your request 
                    swiftly.
                </p>
                <p> You can reply this mail for further inquiry.</p> 
                <p>Also if you didn't send a message across to us, kindly ignore this.</p>
            </div>
        </div>
        ` 
    return message
}

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
                    const mailOption = ({
                        to   : saveUser.email , 
                        from : 'admin@aceafrica.net',
                        subject : 'Thanks for contacting Us.' , 
                        html  : contactMessage(req.get('origin'), saveUser) 
                    })
                    sgMail.send(mailOption)
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