import { db } from "../db/mongo.js";

export default async function transaction(req, res) {
    const transaction = req.body;
    const account = res.locals.account;
    let newBalance;

    try {
        if (transaction.type === "withdraw") {
            newBalance = account.balance - transaction.value;
        } 

        else if (transaction.type === "deposit"){
            newBalance = account.balance + transaction.value;
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
        return res.status(500).send(error);
    }
}