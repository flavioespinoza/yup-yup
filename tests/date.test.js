import '../moment'
import * as yup from 'yup';

const INVALID = 'Date is invalid.';

const defaults = {};

const validate = async (date, { format, min, max, message } = defaults) => {
  let schema = yup.date({
    format,
  });

  if (min && !max) {
    schema = schema.min(min, message);
  }

  if (max && !min) {
    schema = schema.max(max, message);
  }

  if (min && max) {
    schema = schema.between(min, max, message);
  }

  return schema.validate(date);
};

describe('Date', () => {
  test('valid', async () => {
    await expect(validate('12/12/2012')).resolves.toBeTruthy();
    await expect(validate('12-12-2012')).resolves.toBeTruthy();
    await expect(
      validate('2012/12/12', { format: 'YYYY/MM/DD' })
    ).resolves.toBeTruthy();
    await expect(
      validate('20121212', { format: 'YYYYMMDD' })
    ).resolves.toBeTruthy();
  });

  test('invalid', async () => {
    await expect(validate('2012')).rejects.toThrow(INVALID);
    await expect(validate('12-2012')).rejects.toThrow(INVALID);
    await expect(validate('12-2012-12')).rejects.toThrow(INVALID);
    await expect(validate('invalid-date')).rejects.toThrow(INVALID);
  });

  test('min date', async () => {
    await expect(
      validate('12/12/2012', {
        min: '12/11/2012',
      })
    ).resolves.toBeTruthy();

    await expect(
      validate('12/12/2012', {
        min: '12/12/2012',
      })
    ).resolves.toBeTruthy();

    await expect(
      validate('12/10/2012', {
        min: '12/11/2012',
      })
    ).rejects.toThrow(`Date must come after 12/11/2012.`);

    await expect(
      validate('2012/12/12', {
        min: '2012/12/11',
        format: 'YYYY/MM/DD',
      })
    ).resolves.toBeTruthy();

    await expect(
      validate('2012/12/10', {
        min: '2012/12/11',
        format: 'YYYY/MM/DD',
      })
    ).rejects.toThrow();
  });

  test('max date', async () => {
    await expect(
      validate('12/11/2012', {
        max: '12/12/2012',
      })
    ).resolves.toBeTruthy();

    await expect(
      validate('12/12/2012', {
        max: '12/12/2012',
      })
    ).resolves.toBeTruthy();

    await expect(
      validate('12/12/2012', {
        max: '12/11/2012',
      })
    ).rejects.toThrow(`Date must come before 12/11/2012.`);

    await expect(
      validate('2012/12/11', {
        max: '2012/12/11',
        format: 'YYYY/MM/DD',
      })
    ).resolves.toBeTruthy();

    await expect(
      validate('2012/12/12', {
        max: '2012/12/11',
        format: 'YYYY/MM/DD',
      })
    ).rejects.toThrow();
  });

  test('between', async () => {
    await expect(
      validate('12/11/2012', {
        max: '12/12/2012',
        min: '12/10/2012',
      })
    ).resolves.toBeTruthy();

    await expect(
      validate('12/12/2012', {
        min: '12/12/2012',
        max: '12/13/2012',
      })
    ).rejects.toThrow(`Date must be between 12/12/2012 and 12/13/2012.`);

    await expect(
      validate('2012/12/11', {
        max: '2012/12/13',
        min: '2012/12/10',
        format: 'YYYY/MM/DD',
      })
    ).resolves.toBeTruthy();

    await expect(
      validate('2012/12/13', {
        min: '2012/12/11',
        max: '2012/12/12',
        format: 'YYYY/MM/DD',
      })
    ).rejects.toThrow();
  });
});
