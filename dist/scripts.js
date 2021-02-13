// UI Variables
    const uiForm = document.querySelector('form');
    const uiInputs = document.querySelectorAll('.inputs input')
    const uiErrorMsg = document.querySelectorAll('.error-msg')
    const uiLabel = document.querySelectorAll('.inputs label')

 // Messages
    const msg = ['First Name', 'Last Name', 'Looks like this is not an email!', 'Password']
    

// Runs when button is clicked
    uiForm.addEventListener('submit', (e)=>{
        resetSubmission();
        checkForms();
        e.preventDefault();
    });

// Runs when DOM is loaded
    window.addEventListener('DOMContentLoaded', () => {
        focusOut();
    });

// Focus Out event
    function focusOut(){
        uiInputs.forEach((input,idx) =>{
            input.addEventListener('focusout', () => {
                if(input.value != ''){
                  uiLabel[idx].style.display ='none'
                }
            })
        })
    }

// Checks the email syntax
    function checkEmail(email){
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    }

// Check the form input fields
    function checkForms(){

        uiInputs.forEach((input,idx)=>{

             if ( idx === 2){       
                if (!checkEmail(input.value)) showError(idx, msg[2])
            }
            else if(input.value === ''){
                showError(idx, `${msg[idx]} cannot be empty`);
            }
        })
        
    }
   
 // Show when something went wrong
    function showError(idx, msg){
        uiInputs[idx].parentElement.classList.add('error');
        uiErrorMsg[idx].textContent = msg;
    }

// Reset form submission to access input field again
    function resetSubmission(){
       uiInputs.forEach((input,idx)=>{
             input.addEventListener('focusin',()=>{
                    checkForms();
                    input.parentElement.classList.remove('error')
                    uiErrorMsg[idx].textContent = '';
               })
         })
    }
