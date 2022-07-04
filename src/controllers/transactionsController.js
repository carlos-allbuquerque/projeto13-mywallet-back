import { db } from "../db/mongo.js";

export default async function transaction(req, res) {
    const transaction = req.body;
    const account = res.locals.account;
    let newBalance;
        console.log(typeof account.balance);
        console.log(typeof transaction.value);
    try {
        if (transaction.type === "withdraw") {
            newBalance = Number(account.balance) - Number(transaction.value);
        } 
        
        else if (transaction.type === "deposit"){
            newBalance = Number(account.balance) + Number(transaction.value);
        }
        console.log("chegou aqui")

        await db.collection("accounts").updateMany(
            {_id: account._id  },
            { $set: { 
                history: [...account.history, transaction ],
                balance: newBalance
            }}
        );
        return res.sendStatus(201);
        
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
}