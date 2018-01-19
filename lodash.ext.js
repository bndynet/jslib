'use strict';

/**
 * Native functions
 * @author Bendy Zhang <zb@bndy.net>
 * @copyright BNDY.NET 2017
 * @see {@link http://bndy.net|Home Page}
 */

/**===================================================================
 * @external Object
 */

/**
 * Gets or sets property value.
 * @function external:Object#prop
 * @requires {@link https://lodash.com|Lodash}
 * @param {string} propertyName - The property name.
 * @param {*=} propertyValue - The property value.
 * @returns {*} - The property value if propertyValue not set, otherwise nothing.
 * @example
 * {person: {name: 'Bendy'}}.prop('person.name') // output Bendy
 * {}.prop('name', 'Bendy');
 */
Object.prototype.prop = function (propertyName, propertyValue) {
    var isSet = typeof propertyValue === 'undefined' ? false : true;
    if (isSet) {
        _.set(this, propertyName, propertyValue);
    } else {
        _.get(this, propertyName);
    }
};