// const FormBase = withFormik<MyFormProps, FormValues>({
//     mapPropsToValues: props => ({
//         title: props.initialTitle || '',
//         urlMovie: props.initialUrlMovie || '',
//         year: props.initialYear || '',
//         rating: props.initialRating || 0,
//         runtime: props.initialRuntime || 0,
//         movieDescription: props.initialMovieDescription || '',
//     }),

//     validationSchema: Yup.object().shape({
//         title: Yup.string().required('Title is required'),
//         urlMovie: Yup.string().url('Url not valid').required('Url is required'),
//         year: Yup.date().nullable().required('Year is required'),
//         rating: Yup.number().min(0).max(10).required('Rating is required'),
//         runtime: Yup.number().required('Runtime is required'),
//         movieDescription: Yup.string().required('Description is required')
//     }),

//     handleSubmit:(
//         { title, urlMovie, year, rating, runtime, movieDescription }: FormValues,
//          )=> {
//         console.log(title, urlMovie, rating, runtime, year, movieDescription);
//     }
// })(InnerForm);

// export default FormBase;

import { useFormik } from 'formik'
import * as Yup from 'yup'
import FormItem from './components/BasicForm/FormItem'
export function FormBase() {
  const validationSchema = Yup.object().shape({
    txt: Yup.number().required('Url is required'),

    title: Yup.string().required('Fullname is required'),
    rating: Yup.number().min(0).max(10),
  })

  const formik = useFormik({
    initialValues: {
      txt: 0,
      title: '',
      year: '',
      rating: 0,
      runtime: '',
    },
    validationSchema,
    validateOnChange: true,
    // validateOnBlur: false,
    onSubmit: (data) => {
      console.log(JSON.stringify(data))
    },
  })

  return (
    <div className='register-form'>
      <form onSubmit={formik.handleSubmit}>
        <div className='form-group-2'>
          <FormItem
            placeholder='url'
            name='txt'
            type='text'
            title='txt'
            onchange={formik.handleChange}
            value={formik.values.txt}
            id='4'
          />
          <div className='invalid-feedback'>
            {formik.errors.txt && formik.touched.txt ? formik.errors.txt : null}
          </div>
        </div>

        <div className='form-group'>
          <FormItem
            placeholder='title'
            name='title'
            type='text'
            title='title'
            onchange={formik.handleChange}
            value={formik.values.title}
            id='2'
          />
          <div className='invalid-feedback'>
            {formik.errors.title && formik.touched.title ? formik.errors.title : null}
          </div>
        </div>

        <FormItem
          id={'year'}
          title={'RELEASE DATE'}
          type={'date'}
          placeholder={'Select Date'}
          value={formik.values.year}
          onchange={formik.handleChange}
        />

        <FormItem
          id={'rating'}
          title={'RATING'}
          type={'text'}
          placeholder={'7.8'}
          value={formik.values.rating}
          onchange={formik.handleChange}
        />
        <div className='invalid-feedback'>
          {formik.errors.rating && formik.touched.rating ? formik.errors.rating : null}
        </div>
        <FormItem
          id={'time'}
          title={'RUNTIME'}
          type={'text'}
          placeholder={'minutes'}
          value={formik.values.runtime}
          onchange={formik.handleChange}
        />

        <div className='form-group'>
          <button type='submit' className='btn btn-primary'>
            Register
          </button>
          <button
            type='button'
            className='btn btn-warning float-right'
            onClick={formik.handleReset}
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  )
}

export default FormBase
