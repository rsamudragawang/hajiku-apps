import {
  formatNumberWithDot,
  getNumberOnly,
  isEmpty,
  getLastCharacters,
  formatDate,
  getFirstName,
  isEmail,
  findNameById,
  getTextAndSpaceOnly,
  transformText,
  convertToNumber,
  fieldsChecker
} from './index';

describe('utils', () => {
  test('getNumberOnly', () => {
    const string = '1e1r6rf7t32r2';
    expect(getNumberOnly(string)).toBe('1167322');
  });

  test('formatNumberWithDot', () => {
    const string = '1000';
    expect(formatNumberWithDot(string)).toBe('1.000');

    const number = 1000;
    expect(formatNumberWithDot(number)).toBe('1.000');
  });

  test('isEmpty', () => {
    const string = '';
    expect(isEmpty(string)).toBeTruthy();
  });

  test('getLastCharacters', () => {
    const string = '123456';
    expect(getLastCharacters(string, 3)).toBe('456');
  });

  test('formatDate', () => {
    const date = new Date(2018, 2, 21);
    expect(formatDate(date, 'YYYY MMM DD')).toBe('2018 Mar 21');
  });

  test('getFirstName', () => {
    expect(getFirstName('walter ngo')).toBe('walter');
    expect(getFirstName(' ')).toHaveLength(0);
    expect(getFirstName('')).toHaveLength(0);
    expect(getFirstName(null)).toHaveLength(0);
  });

  test('isEmail', () => {
    expect(isEmail('poktan@logtan.id')).toBeTruthy();
    expect(isEmail('poktan@logtan')).toBeFalsy();
    expect(isEmail('poktan.com')).toBeFalsy();
    expect(isEmail('poktan')).toBeFalsy();
  });

  test('findNameById', () => {
    const collections = [{ id: 1, name: 'name 1' }, { id: 2, name: 'name 2' }];
    expect(findNameById(collections, 1)).toBe(collections[0].name);
  });

  test('getTextAndSpaceOnly', () => {
    expect(getTextAndSpaceOnly('walter @#$@$ngo#%#@')).toBe('walter ngo');
  });

  test('transformText', () => {
    let value = '1234abc56789';
    expect(transformText(value, { numberOnly: true })).toBe('123456789');

    value = 'walter 12312!@#$%^&ngo';
    expect(transformText(value, { textAndSpaceOnly: true })).toBe('walter ngo');

    value = 'walter 12312!@#$%^&ngo';
    expect(transformText(value)).toBe(value);
  });

  test('convertToNumber', () => {
    const value = '1.000aaa';
    expect(convertToNumber(value)).toBe(1000);
  });
});

describe('Validator should works properly', () => {
  const fields = {
    fieldNumber: {
      value: 1234567890,
      type: 'number'
    },
    fieldStringNumber: {
      value: '0987654321',
      type: 'number'
    },
    fieldDate: {
      value: '12/12/1200',
      type: 'date'
    },
    fieldDateMissing: {
      value: '12/12',
      type: 'date'
    },
    fieldText: {
      value: 'Testing value',
      type: 'text'
    },
    fieldNumberText: {
      value: 1234567890,
      type: 'text'
    },
    unknowTypeField: {
      value: 'qwe1234!@#$',
      type: ''
    },
    missingTypeField: {
      value: 'qwe1234!@#$',
      type: '123!@#qwe'
    }
  };
  test('Input all fields and should be Invalid', () => {
    expect(fieldsChecker(fields)).toBe(false);
  });

  test('Input fields and excluding INVALID fields should be Valid', () => {
    expect(
      fieldsChecker(fields, [
        'fieldDateMissing',
        'fieldNumberText',
        'unknowTypeField',
        'missingTypeField',
        'fieldStringNumber'
      ])
    ).toBe(true);
  });

  test('Input fields and excluding VALID fields should be Invalid', () => {
    expect(fieldsChecker(fields, ['fieldNumber', 'fieldDate', 'fieldText'])).toBe(false);
  });

  test('Input invalid fields only should be Valid', () => {
    expect(
      fieldsChecker({
        validNumberField: fields.fieldNumber,
        validTextField: fields.fieldText,
        validDateField: fields.fieldDate
      })
    ).toBe(true);
  });

  test('Input valid fields only should be Invalid', () => {
    expect(
      fieldsChecker({
        invalidNumberField: fields.fieldStringNumber,
        invalidTextField: fields.fieldNumberText,
        invalidDateField: fields.fieldDateMissing
      })
    ).toBe(false);
  });
});
