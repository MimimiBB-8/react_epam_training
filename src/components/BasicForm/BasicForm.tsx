import FormItem from '../BasicForm/FormItem'
import Button from '../Button/Button'
import style from './Basicform.module.scss'
import React, { useState, useContext } from 'react'
import { Select, SelectOption } from './Select'
import { stateVisibleContext } from '../../context/StateVisibleContext'
import { changeDataContext } from '../../context/ChangeDataContext'

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

interface BasicFormProps{
  position?: boolean
}

const BasicForm = ({position=false}:BasicFormProps) => {

  const valueContext = useContext(stateVisibleContext)
  const valueData = useContext(changeDataContext)

  let receivedData = [{
    id: valueData.movieData.length,
    title: '',
    year: '',
    rating: '',
    time: '',
    genre: '',
    description: '',
    url: '',
    urlMovie: '',
  }]

  if(position !== true){
    receivedData = valueData.movieData.filter((el) => el.id === valueContext.itemID)
  }

  const [selectValue, setSelectValue] = useState<SelectOption[]>([options[0]])

  const [formValues, setFormValues] = useState(receivedData);

  const values = [...formValues];
  function addValue(e: React.FormEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) {
    const elementID = e.currentTarget.id
    values[0][elementID] = e.currentTarget.value;
    setFormValues(values);
  }
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    addValue(e)
  };
  const handleChangeTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>)=>{
    addValue(e)
  }
  const handleSubmit = (e: React.ChangeEvent<HTMLElement>) => {
    e.preventDefault();
    if(valueData.addNewMovie){
      valueData.addNewMovie(values)
    }
  };

return (
    <>
      <form >
        <div className={style.colon_wrapper}>
          <div className={style.first_colon}>
            <FormItem id={'title'} title={'title'} type={'text'} placeholder={'name'}
                      value={formValues.length !== 0 ? formValues[0].title : ''} onchange={handleChange}/>
            <FormItem id={'urlMovie'} title={'movie_url'} type={'url'} placeholder={'https://'}
                      value={formValues.length !== 0 ? formValues[0].urlMovie : ''} onchange={handleChange}/>
            <label className={style.input_title}>
              Genre
              <Select
                multiple
                options={options}
                value={selectValue}
                onChange={elem => setSelectValue(elem)}
              />
            </label>
            <br />
          </div>
          <div className={style.second_colon}>
            <FormItem id={'year'} title={'RELEASE DATE'} type={'date'} placeholder={'Select Date'}
                      value={formValues.length !== 0 ? formValues[0].year : ''} onchange={handleChange}/>
            <FormItem id={'rating'} title={'RATING'} type={'text'} placeholder={'7.8'}
                      value={formValues.length !== 0 ? formValues[0].rating : ''} onchange={handleChange}/>
            <FormItem id={'time'} title={'RUNTIME'} type={'text'} placeholder={'minutes'}
                      value={formValues.length !== 0 ? formValues[0].time : ''} onchange={handleChange}/>
          </div>
        </div>
        <label className={style.input_title}>
          OVERVIEW
          <textarea id='description' className={style.textarea} title={'OVERVIEW'} placeholder={'Movie description'}
                    defaultValue={formValues.length !== 0 ? formValues[0].description : ''} onChange={handleChangeTextArea}>
          </textarea>
        </label>
        <div className={style.group_button}>
          <Button title={'reset'} classname={'reset_button'} />
          <Button title={'submit'} onClick={handleSubmit}/>
        </div>
      </form>
    </>
  )


}

export default BasicForm
