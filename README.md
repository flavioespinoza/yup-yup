# yup-yup

> Additional validation methods for the [Yup](https://github.com/jquense/yup) validation npm module

[![Version](https://img.shields.io/npm/v/@flavs/yup-yup.svg?style=for-the-badge)](https://www.npmjs.com/package/@flavsy/yup-yup)

## Install

```bash
yarn add @flavs/yup-yup
```
## Methods

#### phone
phone number input validator
`Yup.string.phone('phone_number')`

```js
import "@flavs/yup-yup";
import * as Yup from "yup";

// valid: accepted inputs
console.log(Yup.string.phone('(444) 444-4444')) // true
console.log(Yup.string.phone('+1 (444) 444-4444')) // true
console.log(Yup.string.phone('444-444-4444')) // true
console.log(Yup.string.phone('+1 444-444-4444')) // true
console.log(Yup.string.phone('444.444.4444')) // true
console.log(Yup.string.phone('(444) 444 4444')) // true
console.log(Yup.string.phone('4444444444')); // true
console.log(Yup.string.phone('444 444 4444')) // true
console.log(Yup.string.phone('+14444444444')) // true

// invalid: too many numbers or has a letter or non-numeric character
console.log(Yup.string.phone('44444444445')) // false
console.log(Yup.string.phone('+144444444445')) // false
console.log(Yup.string.phone('S444444445')) // false
```

### Usage
```js
import "@flavs/yup-yup";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({

  // default Yup validator
  email: Yup.string()
    .email()
    .required("Required"),

  // new phone validator
  mobilePhone: Yup.string()
    .phone()
    .required("Required")

});
```
