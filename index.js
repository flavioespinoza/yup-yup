import * as yup from 'yup';
import isRequired from './src/isRequired';
import phone from './src/phone';
import date from './src/date';

yup.addMethod(yup.string, 'isRequired', isRequired);
yup.addMethod(yup.number, 'isRequired', isRequired);
yup.addMethod(yup.array, 'isRequired', isRequired);


yup.addMethod(yup.string, 'phone', phone);
yup.addMethod(yup.number, 'phone', phone);

yup.addMethod(yup.string, 'date', date);
yup.addMethod(yup.number, 'date', date);
