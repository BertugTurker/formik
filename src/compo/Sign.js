// import { useFormik } from 'formik';
// import validationSchema from "./validation";

// function Sign() {
//     const { handleSubmit, handleChange, handleBlur, values, errors, touched } = useFormik({
//         initialValues: {
//           firstName: '',
//           lastName: '',
//           email: '',
//           gender: 'male',
//           hobies: [],
//           country: "",
//       },
//         onSubmit: (values) => {
//           console.log(values)
//         },
//         validationSchema,
//       })
//   return (
//     <div className="App flex flex-col">
//     <div className='self-center my-10'>
//       <h1>Sign Up</h1>
//     </div>
//         <form onSubmit={handleSubmit} className="flex justify-center gap-10">
//             <div className='flex justify-center gap-10'>
//                 <div className='flex flex-col gap-2 ml-52'>
//                 <label>First:</label>
//                 <label>Last Name:</label>
//                 <label>Email:</label>
//                 <label>Country</label>
//                 <label>Gender:</label>
//                 <label>Hobies:</label>
//                 </div>
//                 <div className='flex flex-col gap-2 w-52'>
//                 <input
//                     className='h-6 border-solid border border-black'
//                     name='firstName'
//                     placeholder="Jane"
//                     onChange={handleChange}
//                     onBlur={handleBlur}/>
//                 <input
//                     className='h-6 border-solid border border-black'
//                     name='lastName'
//                     placeholder="Doe"
//                     onChange={handleChange}
//                     onBlur={handleBlur}/>
//                 <input
//                     className='h-6 border-solid border border-black'
//                     name='email'
//                     type="email"
//                     placeholder="jane@acme.com"
//                     onChange={handleChange}
//                     onBlur={handleBlur}/>
//                 <select
//                     className='h-6 border-solid border border-black'
//                     name='country'
//                     value={values.country}
//                     onChange={handleChange}>
//                         <option hidden defaultValue={true}>Select one...</option>
//                         <option value="turkey">Turkey</option>
//                         <option value="uk">UK</option>
//                         <option value="usa">USA</option>
//                         <option value="germany">Germany</option>
//                         <option value="japan">Japan</option>
//                 </select>
//                 <div className='flex gap-2'>
//                     <div>
//                         <span>male</span>
//                         <input
//                         className='ml-1'
//                         name='gender'
//                         value="male"
//                         type="radio"
//                         onChange={handleChange}
//                         checked={values.gender === "male"}
//                         /> 
//                     </div>
//                     <div>
//                         <span>female</span>
//                         <input className='ml-1' name='gender' value="female" type="radio" onChange={handleChange}/>
//                     </div>
//                 </div>
//                 <div className='flex gap-1 flex-wrap'>
//                     <span>futbol</span>
//                     <input name='hobies' value="futbol" type="checkbox" onChange={handleChange}/>
//                     <span>basket</span>
//                     <input name='hobies' value="basket" type="checkbox" onChange={handleChange}/>
//                     <span>voley</span>
//                     <input name='hobies' value="voley" type="checkbox" onChange={handleChange}/>
//                     <span>tenis</span>
//                     <input name='hobies' value="tenis" type="checkbox" onChange={handleChange}/>
//                 </div>
//                 <button className='border-solid border-2 border-sky-500 justify-self-center w-20 ml-12 mt-2' type="submit">Submit</button>
//                 </div>
//             </div>
//             <div className='flex flex-col gap-2 w-72 text-red-400'>
//                 <label>{errors.firstName && touched.firstName && errors.firstName}*</label>
//                 <label>{errors.lastName && touched.lastName && errors.lastName}*</label>
//                 <label>{errors.email && touched.email && errors.email}*</label>
//                 <label>{errors.country && touched.country && errors.country}*</label>
//                 <label className='mt-7'>{errors.hobies && touched.hobies && errors.hobies}*</label>
//             </div>
//           </form>
//           <div className='flex justify-center my-3'>
//               {JSON.stringify(values)}
//             </div>
//     </div>
//   );
  
// }

// export default Sign