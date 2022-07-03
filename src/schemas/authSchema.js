import joi from "joi";

const createAccountSchema = joi.object({
    name: joi.string().empty().required(),
    email: joi.string().email().empty(),
    password: joi.string().empty(),
    passwordConfirmation: joi.string().empty()
})


export default createAccountSchema;