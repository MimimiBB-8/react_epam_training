import FormItem from '../BasicForm/FormItem'
import Button from '../Button/Button'
import style from './Basicform.module.scss'
import React, { useState, useContext } from 'react'
import { Select, SelectOption } from './Select'
import { StateVisibleContext } from '../../context/StateVisibleContext'
import { ChangeDataContext } from '../../context/ChangeDataContext'
import { Formik } from 'formik';


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

const BasicForm = ({ position = false, onClick, showModalWindow }: BasicFormProps) => {
  const stateVisibleValue = useContext(StateVisibleContext)
  const dataMovieValue = useContext(ChangeDataContext)

  let receivedData = [
    {
      id: dataMovieValue.movieData.length,
      title: '',
      year: '',
      rating: '',
      time: '',
      genre: '',
      description: '',
      url: '',
      urlMovie: '',
    },
  ]

  if (position !== true) {
    receivedData = dataMovieValue.movieData.filter((el) => el.id === stateVisibleValue.itemID)
  }

  const [selectValue, setSelectValue] = useState<SelectOption[]>([options[0]])

  const [formValues, setFormValues] = useState(receivedData)

  const values = [...formValues]
  function addValue(
    e: React.FormEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement> | string,
    type = 'input',
  ) {
    let elementID = type
    let targetValue = e
    if (type === 'input' && typeof e !== 'string') {
      elementID = e.currentTarget.id
      targetValue = e.currentTarget.value
    }
    values[0][elementID] = targetValue
    setFormValues(values)
  }
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    addValue(e)
  }

  const handlerChangeSelect = (elem: any) => {
    setSelectValue(elem)
    const stringSelectValue: any[] = []
    elem.map((item: any) => {
      stringSelectValue.push(item.value)
    })
    addValue(stringSelectValue.join(', '), 'genre')
  }
  const handleChangeTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    addValue(e)
  }
  const handleSubmit = (e: React.ChangeEvent<HTMLElement>) => {
    e.preventDefault()
    if (dataMovieValue.addNewMovie) {
      dataMovieValue.addNewMovie(values)
    }
    if (showModalWindow) {
      showModalWindow(true)
    }
  }

  return (
    <>
    <Formik>

    </Formik>
      <form>
        <div className={style.colon_wrapper}>
          <div className={style.first_colon}>
            <FormItem
              id={'title'}
              title={'title'}
              type={'text'}
              placeholder={'name'}
              value={formValues.length !== 0 ? formValues[0].title : ''}
              onchange={handleChange}
            />
            <FormItem
              id={'urlMovie'}
              title={'movie_url'}
              type={'url'}
              placeholder={'https://'}
              value={formValues.length !== 0 ? formValues[0].urlMovie : ''}
              onchange={handleChange}
            />
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
              value={formValues.length !== 0 ? formValues[0].year : ''}
              onchange={handleChange}
            />
            <FormItem
              id={'rating'}
              title={'RATING'}
              type={'text'}
              placeholder={'7.8'}
              value={formValues.length !== 0 ? formValues[0].rating : ''}
              onchange={handleChange}
            />
            <FormItem
              id={'time'}
              title={'RUNTIME'}
              type={'text'}
              placeholder={'minutes'}
              value={formValues.length !== 0 ? formValues[0].time : ''}
              onchange={handleChange}
            />
          </div>
        </div>
        <label className={style.input_title}>
          OVERVIEW
          <textarea
            id='description'
            className={style.textarea}
            title={'OVERVIEW'}
            placeholder={'Movie description'}
            defaultValue={formValues.length !== 0 ? formValues[0].description : ''}
            onChange={handleChangeTextArea}
          ></textarea>
        </label>
        <div className={style.group_button}>
          <Button title={'reset'} classname={'reset_button'} />
          <Button title={'submit'} onClick={handleSubmit} />
        </div>
      </form>
    </>
  )
}

export default BasicForm
