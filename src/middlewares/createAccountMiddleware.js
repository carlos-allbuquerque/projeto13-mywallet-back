import { db } from "../db/mongo.js";
import { createAccountSchema } from "../schemas/authSchema.js";


export default async function crateAccountMiddleware(req, res, next) {
    const user = req.body;
    const validation = createAccountSchema.validate(user, { abortEarly: false });

    if (validation.error ) {
        const messages = validation.error.details.map(item => item.message);
        res.status(422).send(messages);
        return;
    }

    const emailAlreadyExists = await db.collection("accounts").findOne({ email: user.email});

    if (emailAlreadyExists) {
        res.status(409).send("senha ou email incorretos");
        return;
    }
    next();
}
