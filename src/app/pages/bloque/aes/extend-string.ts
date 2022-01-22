export { } // this will make it module


declare global { // this is important to access it as global type String

    interface String {
        utf8Encode(): string;
        utf8Decode(): string;
        base64Encode(): string;
        base64Decode(): string;
    }


}

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */
/** Extend String object with method to encode multi-byte string to utf8
 *  - monsur.hossa.in/2012/07/20/utf-8-in-javascript.html */
String.prototype.utf8Encode = function() {
    return unescape( encodeURIComponent( this ) );
};

/** Extend String object with method to decode utf8 string to multi-byte */
String.prototype.utf8Decode = function() {
    try {
        return decodeURIComponent( escape( this ) );
    } catch (e) {
        return this; // invalid UTF-8? return as-is
    }
};

/** Extend String object with method to encode base64
 *  - developer.mozilla.org/en-US/docs/Web/API/window.btoa, nodejs.org/api/buffer.html
 *  note: if btoa()/atob() are not available (eg IE9-), try github.com/davidchambers/Base64.js */
String.prototype.base64Encode = function() {
    if (typeof btoa != 'undefined') return btoa(this); // browser
    if (typeof Buffer != 'undefined') return new Buffer(this, 'utf8').toString('base64'); // Node.js
    throw new Error('No Base64 Encode');
};

/** Extend String object with method to decode base64 */
String.prototype.base64Decode = function() {
    if (typeof atob != 'undefined') return atob(this); // browser
    if (typeof Buffer != 'undefined') return new Buffer(this, 'base64').toString('utf8'); // Node.js
    throw new Error('No Base64 Decode');
};