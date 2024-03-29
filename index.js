import * as yup from 'yup';
import isRequired from './src/isRequired';
import phone from './src/phone';

yup.addMethod(yup.string, 'isRequired', isRequired);
yup.addMethod(yup.number, 'isRequired', isRequired);


yup.addMethod(yup.string, 'phone', phone);
yup.addMethod(yup.number, 'phone', phone);
