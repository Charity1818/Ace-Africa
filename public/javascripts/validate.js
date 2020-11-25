/**
 * Username validation pattern for a user input
 * @param {Username} val 
 */
export const validateName = (val) => {
    const namePattern = /^[a-zA-Z]?)/
    try {
        if (String(val).match(namePattern)){
            return {
                name : "Matched", 
                value : val.trim()
            }
        }else {
            throw {
                name : "Please provide a valid Name",
                value : null
            }
        }
    } catch (err) {
        return {
            name : err.name,
            value : err.value
        }
    }
}

/**
 * Email validation pattern for a user input
 * @param {Email} val 
 */

export const validateEmail = (val) => {
	const emailPattern = /^[a-zA-Z]+((\d+|_+|\.)?([a-zA-Z]+|\d+)*)+@[a-zA-Z]{3,}\.[a-zA-Z]{2,6}$/
	try { 
		if ( String(val).match(emailPattern)) {
	        return { 
		        name : "Matched" , 
		        value : val.trim() 
	        } 
		}else {
			throw {
				name : "Please provide a valid email" , 
				value : null 
			}
		}
	}catch(err) {
		return {
			name : err.name , 
			value : err.value 
		}
	}
} 

/**
 * Password validation pattern for a user input
 * @param {Password} val 
 */

export const validatePhone = (val) => {
	let passPattern = /[0-9]{11}/
	try { 
		if ( String(val).match(passPattern)) {
	        return { 
		        name : "Matched" , 
		        value : val.trim() 
	        } 
		}else {
			throw {
				name : "Please provide a valid phone number" , 
				value : null 
			}
		}
	}catch(err) {
		return {
			name : err.name , 
			value : err.value 
		}
	}
} 