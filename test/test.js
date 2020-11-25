const sum = require("./sum")
const chai = require("chai")
const {assert} = require("chai")
const Users = require("../model/users")
// const Student = require("../model/student")
const app   =  require("../app") 
 const chaiHTTP = require("chai-http") 
 chai.use(chaiHTTP)


 describe("User List API Testing" , function(){ 
    //Hook before running any test
    beforeEach(async function(){
        await User.deleteMany({})
        .then(res => {
            console.log("Deleted all Users")
        }).catch(err => {
            console.log("An error occured")
        }) 
    })
    // Test the get request to user 
    describe("/api/v1/users" , () => {
        it("Should return a response indicating no list item is created yet" , async function(){
            chai.request(app) 
            .get("/api/v100")
            .then(res => {
                assert.equal(res , "There is nothing inside" , "This should be the same")
                assert.typeOf(res , "object")
            }).catch(err => {
                assert.isObject(err , "Is an object")
            })
        })
    })

    //Test the post route 
    describe("/api/v1/users" , () => {
        it("Should create a new user list" , async function(){
            let user = {
                // title : "Learn Software Testing" , 
                // description: "Software Testing is a crucial aspect of software development",
                firstName: "Charity",
                email : "cozigal@yahoo.com",
                phoneNumber : 09022222207,
                message : "Hello, World"
            }
            chai.request(app)
            .post("/api/v1/usets") 
            .send(user)
            .then(res => {
                assert.equal(res , "Your message was added" , "Return this message to show that the message was added")
            }).catch(err => {
                assert.isObject(err , "Is an object")
            })
        })
    })
    // Update an Item 
    describe("/api/v1/users/:item" , () => {
        it("Should create a new todo item" , async function(){
            let user =  await new User({
                // title : "Learn Software Testing and React" , 
                // description: "Software Testing is a crucial aspect of software development",
                firstName: "Charity",
                email : "cozigal@yahoo.com",
                phoneNumber : 09022222207,
                message : "Hello, World"
            }) 
            let saveUser = await user.save()
            chai.request(app)
            .put(`/api/v1/users/${saveUser._id}`) 
            .send({message : "Learn nothing"})
            .then(res => {
                assert.equal(res , "Your message was added" , "Return this message to show that the message was added")
            }).catch(err => {
                assert.isObject(err , "Is an object")
            })
        })
    })
    // Delete a User
    describe("/api/v1/users/:item " , () => {
        it("Should create a new todo item" , async function(){
            let user =  await new User({
                // title : "Learn Software Testing and React" , 
                // description: "Software Testing is a crucial aspect of software development",
                firstName: "Charity",
                email : "cozigal@yahoo.com",
                phoneNumber : 09022222207,
                message : "Hello, World"
            }) 
            let saveUser = await User.save()
            chai.request(app)
            .put(`/api/v1/user/${saveUser._id}`) 
            .send({message : "Learn nothing"})
            .then(res => {
                assert.equal(res , "Your message was added" , "Return this message to show that the message was added")
            }).catch(err => {
                assert.isObject(err , "Is an object")
            })
        })
    })
})