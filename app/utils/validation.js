import { convertToNumber, isEmpty, isEmail } from './index';

export const requiredField = value => (isEmpty(value) ? 'required' : '');
export const requiredNIK = value => (!value || value.length !== 16 ? 'invalid NIK' : '');
export const requiredNumber = value => (convertToNumber(value) <= 0 ? 'required' : '');
export const validateEmail = value => (!isEmail(value) ? 'email is not valid' : '');
export const validateCardId = value =>
  value && value.length > 0 && value.length < 12 ? 'invalid farmer ID' : '';

export const validateAccountNumber = value =>
  !value || value.length < 7 ? 'invalid bank account number' : '';
export const noValidation = () => '';

export default {
  requiredField,
  requiredNIK,
  requiredNumber,
  validateCardId,
  validateAccountNumber,
  noValidation,
  validateEmail
};
