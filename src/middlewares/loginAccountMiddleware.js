import { db } from "../db/mongo.js";
import { v4 as uuid } from "uuid";
import { loginAccountSchema } from "../schemas/authSchema.js";
import bcrypt from "bcrypt";

export default async function loginAccountMiddleware(req, res, next) {
    const user = req.body;

    const validation = loginAccountSchema.validate(user, {abortEarly: false});

    if (validation.error) {
        const messages = validation.error.details.map(item => item.message);
        res.status(422).send(messages);
        return;
    }

    const account = await db.collection("accounts").findOne({email: user.email});
    
    const isCorrectPassword = bcrypt.compareSync(user.password, account.password);

    if (!account || !isCorrectPassword) {
        return res.status(401).send('Senha ou email incorretos!');
    } 

    res.locals.account = account;

    next();
}
