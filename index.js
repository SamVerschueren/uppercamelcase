'use strict';

/**
 * Returns the UpperCamelCase of the string passed in.
 *
 * @author Sam Verschueren      <sam.verschueren@gmail.com>
 * @since  17 April 2015
 */

// module dependencies
var camelCase = require('camelcase');

module.exports = function(str) {
    var cased = camelCase(str);

    return cased.charAt(0).toUpperCase() + cased.slice(1);
};
