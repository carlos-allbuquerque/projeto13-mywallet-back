import { db } from "../db/mongo.js";

export default async function getAccountInfo(req, res) {

    const account = res.locals.account;



    res.status(200).send(account.history);
}