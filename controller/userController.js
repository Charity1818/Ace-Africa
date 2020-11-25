const User = require("../model/users")
const { v4: uuidv4 } = require('uuid')
const bcrypt = require('bcryptjs')
// const FileHandler = require("./file")

class UserReg {
    getHome = async (req, res) => {
        try {
            let user = await User.find({}) || []
            res.render("index", {
                title: "Ace Africa : Home",
                metaKeywords: "Empowering individual liberty ,  promoting social change",
                metaDescription: "Empowering individual liberty ,  promoting social change",
                admin: "charity",
                user: user,
            })
        } catch (error) {
            console.log(error)
            res.json({
                message: error.message
            })
        }
    }

    postLandingPage = async (req , res ) => {
        try {
            const {name , email , phoneNumber , message } = req.body

            const client = await User.find({})
            if(client.length == 0) {
                const newUser = await new User ({
                    email : email,
                    name : name,
                    message : message,
                    phoneNumber : phoneNumber,
                })
                const savedUser = await newUser.save()
                if(savedUser) {
                    res.redirect("/")
                }else{
                    throw 'Could not save User'
                }
                
            }else {
                throw {
                    message : "Error Sending your message"
                }
            }
        }catch(error){
            res.status(400)
            res.json({message : error , status : 400})
            console.log(error)
        }
    }
    // getUserSignUp = async (req, res) => {
    //     try {
    //         res.render("user", {
    //             title: "The User Registration Page",
    //             metaDescription: "A page for users to fill in their details"
    //         })
    //     } catch (error) {
    //         res.json({
    //             message: error.message
    //         })
    //     }
    // }
    // getUsers = async (req, res) => {
    //     try {
    //         let UsersReg = await UsersReg.find({}) || []
    //         res.render("users", {
    //             users: users
    //         })
    //     } catch (error) {
    //         res.json({
    //             message: error.message
    //         })
    //     }
    // }
    // getUser = async (req, res) => {
    //     try {
    //         let { fullName } = req.params
    //         let userReg = await userReg.findOne({ fullName: fullName }) || false
    //         res.render("user", {
    //             user: user
    //         })
    //     } catch (error) {
    //         res.json({
    //             message: error.message
    //         })
    //     }
    // }
    // createUser = async (req, res) => {
    //     try {
    //         if (true) {
    //             let date = new Date().getDate()
    //             // let fileName = `${date}-${req.file.originalname}`
    //             const { fullName, email, phoneNumber, message } = req.body
    //             const user = await new User({
    //                 fullName: fullName,
    //                 email: email,
    //                 phoneNumber: phoneNumber,
    //                 message: message
    //             })
    //             let saveUser = await user.save()
    //             if (saveUser) {
    //                 res.redirect(`/registration-success?email=email=${email}`)
    //             }
    //         } else {
    //             throw new Error()
    //         }
    //     } catch (error) {
    //         res.json({
    //             message: error.message
    //         })
    //     }
    // }

    // getUserRegister = (req, res) => {
    //     res.render("user-registration")
    // }

    // // handleLoginAttempt = async (req, res) => {
    // //     try {
    // //         const { fullName, email } = req.body
    // //         const user = await User.findOne({ email: email })
    // //         if (user) {
    // //             // let isValidUser = await bcrypt.compare(password, admin.password)
    // //             if (isValidUser) {
    // //                 req.session.user_email = email
    // //                 req.session.fullName = fullName
    // //                 res.redirect(`/users`)
    // //             } else {
    // //                 throw new Error()
    // //             }
    // //         } else {
    // //             res.render("user-login", {
    // //                 error: "Invalid Credentials Provided"
    // //             })
    // //         }

    // //     } catch (error) {
    // //         res.json({ message: error.message })
    // //     }

    // // }
    // getRegSuccessPage = (req, res) => {
    //     let userEmail = req.query ? req.query.email : null
    //     res.send(`Your registration was successful using ${userEmail} . Login now`)
    // }

    // checkSession = async (req, res, next) => {
    //     try {
    //         if (req.session.formId) {
    //             next()
    //         } else {
    //             req.session.formId = uuidv4()
    //             next()
    //         }
    //     } catch (erorr) {
    //         res.json({ erorr: erorr.message })
    //     }
    // }
    // dropUser = async (req, res) => {
    //     try {
    //         let { fullName } = req.params

    //         // FileHandler.deleteFile(`./public/issues/${name}`)
    //         await User.findOneAndRemove({ fullName: fullName }) || false
    //         res.redirect("/user")
    //     } catch (error) {
    //         res.json({
    //             message: error.message
    //         })
    //     }
    // }
    // updateUser = async (req, res) => {
    //     try {
    //         let fullName = req.params.name

    //         const { fullName, message } = req.body
    //         let hasUpdate = await User.findOneAndUpdate({ fullName: user.message }, {
    //             // name: name,
    //             // description: content,
    //             fullName: fullName,
    //             email: email,
    //             phoneNumber: phoneNumber,
    //             message: message
    //         }, {
    //             new: true,
    //             useFindAndModify: false
    //         })
    //         if (hasUpdate) {
    //             res.redirect("/")
    //         } else {
    //             res.send("Sorry an error occured")
    //         }
    //     } catch (error) {
    //         res.json({
    //             message: error.message
    //         })
    //     }
    // }

    // checkSession = async (req, res, next) => {
    //     try {
    //         if (req.session.formId) {
    //             next()
    //         } else {
    //             req.session.formId = uuidv4()
    //             next()
    //         }
    //     } catch (erorr) {
    //         res.json({ erorr: erorr.message })
    //     }
    // }
}
module.exports = new UserReg() 