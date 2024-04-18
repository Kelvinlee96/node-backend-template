/**
 * Error handling middleware that sends a generic response based on the error passed.
 * @param {Error} err The error object that might contain a message or type.
 * @param {Request} req The Express Request object (not used here but required by middleware signature).
 * @param {Response} res The Express Response object.
 * @param {NextFunction} next The next middleware function in the stack.
 */
function errorHandler(err, req, res, next) {
    const statusCode = err.statusCode || 500; // Default to 500 if statusCode not provided

    console.error("Error:", err);

    // Check if the error object has a specific structure you expect
    res.status(statusCode).send({
        error: {
            message: err.message || 'An unexpected error occurred',
            ...(err.errors ? { details: err.errors } : {}), // Spread additional error details if available
        }
    });
}

export { errorHandler };
