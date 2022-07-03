export default function passwordMiddleware(req, res, next) {
    const {password, passwordConfirmation} = req.body;

    if ( password !== passwordConfirmation) {
        res.status(409).send("falha na confirmação da senha");
        return;
    }

    next();
}