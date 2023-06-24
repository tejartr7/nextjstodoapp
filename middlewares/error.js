export const errorHandler = (res, statusCode = 500, message = "Sever error") => {
    return res.status(400).json({ success: false, message });
}
export const asyncError = (passedFunc) => (req, res) => {
    return Promise.resolve(passedFunc(req, res)).catch((err) => {
        return errorHandler(res, 500, err.message);
    });
};