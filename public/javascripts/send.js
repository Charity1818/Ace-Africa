import {sendData, selector, createElement, selectAll} from './api.js'
import {validateEmail , validatePhone , validateName } from './validate.js'


const AccountModel = {
    validFormValue : {}
}

class AccountView  { 
    constructor() {
        this.inputs = Array.from(document.querySelectorAll(".validate"))
    } 
} 

class AccountController {
    constructor(view , model) {
        this.view = new view()
        this.model = model
        this.addEvent() 
    }

    handleBlur(event) {
        if ( event.target.id === "name" ) { 
            if (event.target.value !== "" && event.target.value.trim().length > 0) {
                AccountModel.validFormValue[`${event.target.id}`] = event.target.value 
            }else{
                AccountModel.validFormValue[`${event.target.id}`] = ""
            }
        } 

        if (event.target.id === "email") {  
            if (validateEmail(event.target.value).value) {
                AccountModel.validFormValue[`${event.target.id}`] = event.target.value 
            }
            event.target.value = event.target.value 
			event.target.removeEventListener("focus" , this.handleBlur)
        }

        if (event.target.id === "phone") {  
            if (validatePassword(event.target.value).value) {
                AccountModel.validFormValue[`${event.target.id}`] = event.target.value 
            }
            event.target.value = event.target.value 
			event.target.removeEventListener("focus" , this.handleBlur)
        }
    }

    handleSubmit(event) { 
		if (event.target.id === "submit") { 
               
            console.log(AccountModel.validFormValue) 
            if(selector("#name").value == "" && selector("#email").value == "" && selector("#phone").value == ""){
                event.preventDefault()
                selector('#response-send').classList.remove('err-msg', 'success-msg')
                selector('#response-send').classList.add('err-msg')
                selector('#response-send').textContent = "Please fill all neccessary fields."
            }
            else if(!( AccountModel.validFormValue.email)){
                event.preventDefault()
                selector('#response-send').classList.remove('err-msg', 'success-msg')
                selector('#response-send').classList.add('err-msg')
                selector('#response-send').textContent = "Please provide a valid Email address."

            }else if(!(AccountModel.validFormValue.phone)){
                event.preventDefault()
                selector('#response-send').classList.remove('err-msg', 'success-msg')
                selector('#response-send').classList.add('err-msg')
                selector('#response-send').textContent = "Kindly enter a correct phone number"

            }else if(!(AccountModel.validFormValue.name)){
                event.preventDefault()
                selector('#response-send').classList.remove('err-msg', 'success-msg')
                selector('#response-send').classList.add('err-msg')
                selector('#response-send').textContent = "Please provide your Name"
           
            }
        }

    }

    addEvent() {
        this.view.inputs.map(field => {
            field.addEventListener("blur" , this.handleBlur) 
            field.addEventListener("click" , this.handleSubmit) 
        })
    }
}

const app = new AccountController(AccountView , AccountModel)