export default function getHistoric(req, res) {

    const account = res.locals.account;

    res.status(200).send(account.history);
}