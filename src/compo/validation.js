import { object, string, array } from 'yup';

const validations = object({
    firstName: string().min(2).required(),
    lastName: string().min(2).required(),
//   lastName: string().oneOf([ref("firstName")]).required(),
//   age: number().required().positive().integer(),
    email: string().email().required(),
    gender: string().matches(/male|female/).required(),
    hobies: array().min(1).required(),
    country: string().required()
//   website: string().url().nullable(),
//   createdOn: date().default(() => new Date()),

});

export default validations;