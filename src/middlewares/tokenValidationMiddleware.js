import { db } from "../db/mongo.js";
export async function tokenValidationMiddleware(req, res, next) {
    const { authorization } = req.headers;
    const token = authorization?.replace('Bearer ', '')

    if (!token) {
        return res.sendStatus(401)
    }

    const session = await db.collection('sessions').findOne({ token });
    if (!session) {
        return res.sendStatus(401);
    }

    

    const account = await db.collection('accounts').findOne({ _id: session.accountId });
    if (!account) {
        return res.sendStatus(401);
    }
    console.log(account);
    res.locals.account = account;
    next();
}