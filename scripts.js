const username = document.getElementById("username")
const password = document.getElementById("password")
const email = document.getElementById("email")
const form = document.getElementById("form")
const errorElement = document.getElementById("error")

form.addEventListener("submit", (e) => {
   
    let messages = []
    if (username.value === '' || usernamename.value == null) {
        messages.push("username is required")
    }

    if (password.value.length <= 8 ) {
        messages.push("password must be longer than eight characters, fur real")
    }
    if (password.value.length >= 20 ) {
        messages.push("password must be shorter then twenty characters")
    }

    if (password.value === "password" ) {
        messages.push("password cannot be password")
    }

    if(messages.length > 0 ) {
       e.preventDefault() 
       errorElement.innerText = messages.join(', ')
    }
    
})