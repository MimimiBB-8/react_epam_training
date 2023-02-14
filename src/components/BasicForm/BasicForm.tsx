import { useEffect, useState } from 'react'
import FormItem from '../BasicForm/FormItem'
import Button from '../Button/Button'
import style from './Basicform.module.scss'
import { Select, SelectOption } from './Select'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useAppSelector } from '../../hooks/useTypeRedux'
import { useDispatch } from 'react-redux'

const options = [
  { label: 'Crime', value: 'crime' },
  { label: 'Drama', value: 'drama' },
  { label: 'Adventure', value: 'adventure' },
  { label: 'Music', value: 'music' },
  { label: 'Thriller', value: 'thriller' },
  { label: 'Biography', value: 'biography' },
  { label: 'Action', value: 'action' },
  { label: 'Sci-Fi', value: 'sci-fi' },
]

interface BasicFormProps {
  position?: boolean
  onClick?: () => void
  showModalWindow?: any
}

type MovieDitales = {
  id?: number
  title: string
  poster_path: string
  vote_average: number
  genres: []
  release_date: string
  runtime: number
  overview: string
}

const BasicForm = ({ position = false, onClick, showModalWindow }: BasicFormProps) => {
  const [selectValue, setSelectValue] = useState<SelectOption[]>([options[0]])


  const validationSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    url: Yup.string().required('Url is required'),
    year: Yup.date().required('Date is required'),
    rating: Yup.number()
      .positive('Rating must be greater than zero')
      .max(10)
      .required('Rating is required'),
    runtime: Yup.number()
      .positive('Runtime must be greater than zero')
      .required('Runtime is required'),
  })


  
  const formik = useFormik({
    initialValues: {
      title: '',
      url: '',
      year: '',
      rating: '',
      runtime: '',
      description: '',
      genre: selectValue,
    },
    validationSchema,
    validateOnChange: true,
    // validateOnBlur: false,
    onSubmit: (data) => {
      addSelectOption(data)
      console.log(JSON.stringify(data))
    },
  })

  const addSelectOption = (data: any) => {
    const elem: any[] = [];
    selectValue.map((item: any) => {
      elem.push(item.label)
    })
    data.genre = elem
  }

  const handlerChangeSelect = (elem: any) => {
    setSelectValue(elem)
    const stringSelectValue: any[] = []
    elem.map((item: any) => {
      stringSelectValue.push(item.value)
    })
    formik.handleChange
  }

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className={style.colon_wrapper}>
          <div className={style.first_colon}>
            <FormItem
              id={'title'}
              title={'title'}
              type={'text'}
              placeholder={'Enter title'}
              onchange={formik.handleChange}
              value={formik.values.title}
              name={'title'}
            />
            <div className='invalid-feedback'>
              {formik.errors.title && formik.touched.title ? formik.errors.title : null}
            </div>
            <FormItem
              id={'urlMovie'}
              name={'url'}
              title={'movie_url'}
              type={'url'}
              placeholder={'https://'}
              onchange={formik.handleChange}
              value={formik.values.url}
            />
            <div className='invalid-feedback'>
              {formik.errors.url && formik.touched.url ? formik.errors.url : null}
            </div>
            <label className={style.input_title}>
              Genre
              <Select
                multiple
                options={options}
                value={selectValue}
                onChange={(elem) => handlerChangeSelect(elem)}
              />
            </label>
            <br />
          </div>
          <div className={style.second_colon}>
            <FormItem
              id={'year'}
              title={'RELEASE DATE'}
              type={'date'}
              placeholder={'Select Date'}
              value={formik.values.year}
              onchange={formik.handleChange}
              name='year'
            />
            <div className='invalid-feedback'>
              {formik.errors.year && formik.touched.year ? formik.errors.year : null}
            </div>
            <FormItem
              id={'rating'}
              title={'RATING'}
              type={'number'}
              placeholder={'7.8'}
              value={formik.values.rating}
              onchange={formik.handleChange}
              name={'rating'}
            />
            <div className='invalid-feedback'>
              {formik.errors.rating && formik.touched.rating ? formik.errors.rating : null}
            </div>
            <FormItem
              id={'time'}
              title={'RUNTIME'}
              type={'number'}
              placeholder={'minutes'}
              value={formik.values.runtime}
              onchange={formik.handleChange}
              name={'runtime'}
            />
            <div className='invalid-feedback'>
              {formik.errors.runtime && formik.touched.runtime ? formik.errors.runtime : null}
            </div>
          </div>
        </div>
        <label className={style.input_title}>
          OVERVIEW
          <textarea
            id='description'
            className={style.textarea}
            title={'OVERVIEW'}
            placeholder={'Movie description'}
            defaultValue={formik.values.description}
            onChange={formik.handleChange}
            name='description'
          ></textarea>
        </label>
        <div className={style.group_button}>
          <Button title={'reset'} classname={'reset_button'} />
          <Button title={'submit'} type={'submit'} />
        </div>
      </form>
    </>
  )
}

export default BasicForm
