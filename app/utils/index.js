// eslint-disable-next-line import/prefer-default-export
import moment from 'moment';
import _ from 'lodash';
import { REGEX } from '../constants';

export function isEmpty(value) {
  return value === null || value === undefined || String(value).trim() === '';
}

export const getNumberOnly = (string = '') => string.replace(/[^\d]+/g, '');

export const convertToNumber = (string = '') => {
  const numberString = getNumberOnly(string);
  return isEmpty(numberString) ? 0 : parseFloat(numberString);
};

/**
 * Get text and space only
 * for example: "walter @#$@$ngo#%#@" => "walter ngo"
 * @param str
 * @return {string}
 */
export const getTextAndSpaceOnly = (str = '') => str.replace(/[^A-Za-z\s]/g, '');

export const formatNumberWithDot = (string = '') => {
  let number = getNumberOnly(string.toString());
  if (_.isEmpty(number)) number = 0;
  return parseFloat(number)
    .toString()
    .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.');
};

export const getFirstName = string => _.split(string, ' ', 1)[0];

export const formatDate = (date, format) => moment(date).format(format);

/**
 * Get last characters
 * @param {String} value
 * @param {Number} numberOfCharacters
 * @return {string}
 */
export const getFirstCharacters = (value = '', numberOfCharacters = 0) => {
  if (value.length > numberOfCharacters) {
    return value.slice(0, numberOfCharacters);
  }
  return value;
};

/**
 * Get last characters
 * @param {String} value
 * @param {Number} numberOfCharacters
 * @return {string}
 */
export const getLastCharacters = (value = '', numberOfCharacters = 0) => {
  if (value.length > numberOfCharacters) {
    return value.slice(-numberOfCharacters);
  }
  return value;
};

/**
 * Validate a string is an email or not
 * @param email
 * @return {boolean}
 */
export const isEmail = email =>
  /* eslint-disable no-useless-escape */
  REGEX.regExToCheckEmail.test(String(email).toLowerCase());

/**
 * Return empty function
 */
export const noop = () => {};

/**
 * Convert String To Title Case <-- like this comment
 */
export const toTitleCase = (str = '') =>
  str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());

/**
 * to find item in collections by id
 * @param {Array} collections - format: [{ name, id }]
 * @param id
 * @return {string}
 */
export const findNameById = (collections, id) => {
  const foundItem = collections.find(item => item.id === id);
  return foundItem ? foundItem.name : '';
};

export const checkSpecialCharacter = (str = '') => str.match(/[^A-Za-z0-9_\s]/gi) !== null;

export const transformText = (value, params = { numberOnly: false, textAndSpaceOnly: false }) => {
  if (params.numberOnly) return getNumberOnly(value);
  else if (params.textAndSpaceOnly) return getTextAndSpaceOnly(value);
  return value;
};

/**
 * Verifying provided fields named -> "fieldsChecker"
 * Provided excluding mandatory fields will not be checked
 * Defining types inside the typesDefines constant,
 * if type is not supported will return default as false <- marked as an Invalid
 * @param {Object} fields - format: Object<Name: {value, type}>
 * @param {Array} excludingNotMandatoryFields - format: [string]
 * return Valid = Boolean
 */
export const typesDefine = {
  date: date => _.words(date, /[^\/]\d+/g).length >= 3,
  text: text => text.length > 0,
  number: number => _.isNumber(number) && _.parseInt(number) > 0,
  default: () => false
};

export const checkFieldHasValue = ({ value, type }) =>
  (!!typesDefine[type] && typesDefine[type](value)) || typesDefine.default();

export const ignoreAnyInvalidFields = (fields = []) => !(_.indexOf(fields, false) >= 0);

export const fieldsChecker = (fields = {}, excludingNotMandatoryFields = []) => {
  const fieldsList = Object.keys(fields);
  const mandatoryFields = _.pullAllWith(fieldsList, excludingNotMandatoryFields, _.isEqual);
  return ignoreAnyInvalidFields(mandatoryFields.map(field => checkFieldHasValue(fields[field])), false);
};
