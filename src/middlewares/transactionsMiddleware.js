import transactionSchema from "../schemas/transactionSchema.js";

export default function transactionsSchema(req, res, next) {
    const transaction = req.body;

    const validation = transactionSchema.validate(transaction, {abortEarly: false});

    if (validation.error) {
        const messages = validation.error.details.map(item => item.message);
        return res.status(422).send(messages);
        
    }

    const account = res.locals.account;

    if (transaction.type === "whithdraw" && account.balance < transaction.value) {
        return res.status(406).send("saldo induficiente");
    }

    next();
}