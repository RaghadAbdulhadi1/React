/* eslint-disable @typescript-eslint/naming-convention */

const VALIDATION_CONTENT = {
    LOGIN_FORM: {
        EMAIL_ADDRESS_CHECK:"User with this email doesn't exist",
        LOGGED_IN_SUCCESS: "You have been logged in successfully",
        PASSWORD_CHECK: "Check your password"
    },
    REGISTER_FORM: {
        CONFIRM_PASSWORD_CHECK: "Passwords doesn't match",
        EMAIL_ADDRESS_CHECK:"Valid email",
        PASSWORD_CHECK: {
            CAPITAL_LETTER_CHECK:"A capital (uppercase) letter",
            CHARCHTERS_CHECK:"A symbol",              
            NUMBERS_CHECK:"A number",
            SMALL_LETTER_CHECK:"A small (loswercase) letter",
        },
        USER_NAME_CHECK:"All small (lowercase) letters and starts with a character",
    }
}

export { VALIDATION_CONTENT };
