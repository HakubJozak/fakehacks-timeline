/**
 * Created by Martin Kadlec on 17/10/16.
 */

/**
 * @property {String} message
 * @property {String} title
 */
class AppError extends Error {
    constructor(message, title, code, res) {
        super(message);
        this.name = this.constructor.name;
        this.caption = message || 'Application Error';
        this.title = title || null;
        this.timestamp = Date.now();
        this.code = code || 500;
        this.res = res;
        Error.captureStackTrace(this, this.constructor.name);
    }
}

export default AppError;
