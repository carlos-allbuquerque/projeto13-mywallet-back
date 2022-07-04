import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";
import { db } from "../db/mongo.js";


export function createAccount(req, res) {
    const {name, email, password} = req.body;

    const account = {
        name: name, 
        email: email,
        password: bcrypt.hashSync(password, 10),
        balance: 0,
        history: []
    }


    const inserted = db.collection("accounts").insertOne(account);
    (inserted) ? res.sendStatus(201) : res.sendStatus(500);
    return;
}


export async function loginAccount(req, res) {

    const account = res.locals.account;

    const token = uuid();

    await db.collection("sessions").insertOne({
        token,
        accountId: account._id
    });

    return res.status(201).send({ token });
    
}
