const linkText = (formType: string): string => {
    return formType === "login" 
    ? "Register" : "Login";
}

const formSwitchText = (formType: string): string => {
    return formType === "login" 
    ? "Not a member? "
    : "Already registered? ";
}

export { linkText, formSwitchText };
