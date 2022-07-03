import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";
import { db } from "../db/mongo.js";


export async function createUser(req, res) {
    const {name, email, password} = req.body;

    const account = {
        name: name, 
        email: email,
        password: bcrypt.hashSync(password, 10),
        balance: 0,
        history: {}
    }


    const inserted = db.collection("accounts").insertOne(account);
    (inserted) ? res.sendStatus(201) : res.sendStatus(422);
    return;
}