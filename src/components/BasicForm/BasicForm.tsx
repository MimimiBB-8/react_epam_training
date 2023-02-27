import { useCallback, useState } from 'react'
import FormItem from '../BasicForm/FormItem'
import Button from '../Button/Button'
import style from './Basicform.module.scss'
import { Select, SelectOption } from './Select'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useAppSelector } from '../../hooks/useTypeRedux'
import { useDispatch } from 'react-redux'
import { updateData, addData } from '../../store/actions/data'

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
  edidForm?: boolean
  onClick: () => void
  showModalWindow?: any
}

interface LLL {
  id?: number
  title: string,
  // eslint-disable-next-line camelcase
  poster_path: string,
  // eslint-disable-next-line camelcase
  release_date: string,
  // eslint-disable-next-line camelcase
  vote_average: number,
  runtime: number,
  overview: string,
  genres: []
}

const BasicForm = ({ edidForm = false, onClick }: BasicFormProps) => {

  const [selectValue, setSelectValue] = useState<SelectOption[]>([options[0]])

  const idItem = useAppSelector((state) => state.recervingId)

  const { data, loading, error } = useAppSelector((state) => state.data)

  const validationSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    // eslint-disable-next-line camelcase
    poster_path: Yup.string().required('Url is required'),
    // eslint-disable-next-line camelcase
    release_date: Yup.date().required('Date is required'),
    // eslint-disable-next-line camelcase
    vote_average: Yup.number()
      .positive('Rating must be greater than zero')
      .max(10)
      .required('Rating is required'),
    runtime: Yup.number().
      integer()
      .positive('Runtime must be greater than zero')
      .required('Runtime is required'),
  })

  let movieDescription: string | any[] = []

  if (edidForm !== false) {
    movieDescription = data.filter(item => item.id === idItem.itemId);
  }

  const dispatch = useDispatch();

  const fillValue = (elem: any) => {
    return movieDescription.length === 0 ? '' : movieDescription[0][elem]
  }

  const formik = useFormik({
    initialValues: {
      id: movieDescription.length === 0 ? null : idItem.itemId,
      title: `${fillValue('title')}`,
      // eslint-disable-next-line camelcase
      poster_path: `${fillValue('poster_path')}`,
      // eslint-disable-next-line camelcase
      release_date: `${fillValue('release_date')}`,
      // eslint-disable-next-line camelcase
      vote_average: Number(`${fillValue('vote_average')}`),
      runtime: Number(`${parseInt(fillValue('runtime'))}`),
      overview: `${fillValue('overview')}`,
      genres: selectValue
    },
    validationSchema,
    validateOnChange: true,
    onSubmit: (data) => {
      addSelectOption(data)
      if (edidForm === true) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        dispatch(updateData(data))
      }
      else {
        const { id, ...newData } = data;
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        dispatch(addData(newData))
      }
      onClick()
    },
  })



  const addSelectOption = (data: any) => {
    const elem: any[] = [];
    selectValue.map((item: any) => {
      elem.push(item.label)
    })
    data.genres = elem
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
              name={'poster_path'}
              title={'movie_url'}
              type={'url'}
              placeholder={'https://'}
              onchange={formik.handleChange}
              value={formik.values.poster_path}
            />
            <div className='invalid-feedback'>
              {formik.errors.poster_path && formik.touched.poster_path ? formik.errors.poster_path : null}
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
              value={formik.values.release_date}
              onchange={formik.handleChange}
              name='release_date'
            />
            <div className='invalid-feedback'>
              {formik.errors.release_date && formik.touched.release_date ? formik.errors.release_date : null}
            </div>
            <FormItem
              id={'rating'}
              title={'RATING'}
              type={'number'}
              placeholder={'Enter rating'}
              value={formik.values.vote_average}
              onchange={formik.handleChange}
              name={'vote_average'}
            />
            <div className='invalid-feedzback'>
              {formik.errors.vote_average && formik.touched.vote_average ? formik.errors.vote_average : null}
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
            defaultValue={formik.values.overview}
            onChange={formik.handleChange}
            name='overview'
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

