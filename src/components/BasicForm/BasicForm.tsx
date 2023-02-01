import FormItem from '../BasicForm/FormItem'
import Button from '../Button/Button'
import style from './Basicform.module.scss'
import React, { useState, useContext } from 'react'
import { Select, SelectOption } from './Select'
import { Context } from '../Context/Context'
import { ContextData } from '../Context/ContextData'

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


const BasicForm = () => {

  const valueContext = useContext(Context)
  const valueData = useContext(ContextData)


  const [item, setReset] = useState(valueData.movieData.filter((el) => el.id === valueContext.itemID))
  const [selectValue, setSelectValue] = useState<SelectOption[]>([options[0]])



  function handleOnReset(e: React.MouseEvent<HTMLButtonElement>){
    e.preventDefault()
    setReset([])
  }

return (
    <>
      <form>
        <div className={style.colon_wrapper}>
          <div className={style.first_colon}>
            <FormItem title={'Title'} type={'text'} placeholder={'name'}
                      value={item.length !== 0 ? item[0].title : ''}/>
            <FormItem title={'Movie URl'} type={'url'} placeholder={'https://'}
                      value={item.length !== 0 ? item[0].urlMovie : ''} />
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
            <FormItem title={'RELEASE DATE'} type={'date'} placeholder={'Select Date'}
                      value={item.length !== 0 ? item[0].year : ''} />
            <FormItem title={'RATING'} type={'text'} placeholder={'7.8'}
                      value={item.length !== 0 ? item[0].rating : ''} />
            <FormItem title={'RUNTIME'} type={'text'} placeholder={'minutes'}
                      value={item.length !== 0 ? item[0].time : ''} />
          </div>
        </div>
        <label className={style.input_title}>
          OVERVIEW
          <textarea className={style.textarea} title={'OVERVIEW'} placeholder={'Movie description'}
                    defaultValue={item.length !== 0 ? item[0].description : ''}>

          </textarea>
        </label>
        <div className={style.group_button}>
          <Button title={'reset'} classname={'reset_button'} onClick={handleOnReset}/>
          <Button title={'submit'} />
        </div>
      </form>
    </>
  )


}

export default BasicForm
