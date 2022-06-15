const onchange = (lableId, lable, err, validator = (val) => true, effectedlables = [], effectedinputs = [],) => (val) => {
    const validationResult = val && validator(val);
    if (validationResult) {
        document.getElementById(lableId).innerHTML = lable;
        effectedlables.forEach(id => {
            const element = document.getElementById(id)
            element.classList.remove("err-lable");
        })
        effectedinputs.forEach(id => {
            const element = document.getElementById(id)
            element.classList.remove("err-input");
        })
    }
    else {
        document.getElementById(lableId).innerHTML = err;
        effectedlables.forEach(id => {
            const element = document.getElementById(id)
            element.classList.add("err-lable");
        })
        effectedinputs.forEach(id => {
            const element = document.getElementById(id)
            element.classList.add("err-input");
        })
    }

}
const emailValidator = (email) => email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
const passValidator = (passId, passCopyId) => () => document.getElementById(passId).value == document.getElementById(passCopyId).value;

const onchangeEmail = onchange("ELable", "Email", "Wrong email format", emailValidator,["ELable"],["EInput"])

const onchangePass = onchange("PCLable", "Re-enter password", "Password not maching", passValidator("PI", "PCI"),["PCLable"],["PCI"]);

const togglePassword = (eye, inputId) => {
    
    const inputField = document.getElementById(inputId)
    if (inputField.type == "text") {
        inputField.type = "password"
        eye.classList = "bi bi-eye"
    }
    else {
        inputField.type = "text"
        eye.classList = "bi bi-eye-slash"
    }
}