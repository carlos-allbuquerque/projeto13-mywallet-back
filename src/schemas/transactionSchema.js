import joi from "joi";

const transactionSchema = joi.object({
    value: joi.number().empty().required(),
    type: joi.string().empty().equal("deposit", "withdraw").required(),
    description: joi.string().empty().required(),
    date: joi.string().required()
})

export default transactionSchema;