# yup-yup

> Additional validation methods for the [Yup](https://github.com/jquense/yup) validation npm module

[![Version](https://img.shields.io/npm/v/@flavs/yup-yup.svg?style=for-the-badge)](https://www.npmjs.com/package/@flavsy/yup-yup)

## Install

```bash
yarn add @flavs/yup-yup
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
    .phone('phone number is not valid')
    .required("Required")

});
```
