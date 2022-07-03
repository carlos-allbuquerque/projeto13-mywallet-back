import authSchema from "../schemas/authSchema.js";
import { db } from "../db/mongo.js";


export default async function crateAccountMiddleware(req, res, next) {
    const user = req.body;
    const validation = authSchema.validate(user, { abortEarly: false });

    if (validation.error ) {
        const messages = validation.error.details.map(item => item.message);
        res.status(422).send(messages);
        return;
    }

    const emailAlreadyExists = await db.collection("accounts").findOne({ email: user.email});

    if (emailAlreadyExists) {
        res.status(409).send("email já registrado no sistema");
        return;
    }
    next();
}
