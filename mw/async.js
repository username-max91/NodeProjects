//wrapper for async controllers functions
//controller is taken as 'fn' argument, access to req, res, next is coming from Express

const asyncWrapper = (fn) => {
    return async (req, res, next) => {
        try {
            await fn(req, res, next)
        } catch (error) {
            //passing error to the next set of middleware
            next(error)
        }
    }
}

module.exports = asyncWrapper