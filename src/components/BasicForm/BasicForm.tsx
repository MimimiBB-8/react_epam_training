import FormItem from '../BasicForm/FormItem'
import Button from '../Button/Button'
import style from './Basicform.module.scss'
import {useState} from 'react'
import { Select, SelectOption } from './Select'

const options = [
  { label: 'First', value: 1 },
  { label: 'Second', value: 2 },
  { label: 'Third', value: 3 },
  { label: 'Fourth', value: 4 },
  { label: 'Fifth', value: 5 },
]

function BasicForm() {
  const [value1, setValue1] = useState<SelectOption[]>([options[0]])
  return (
  <>
    <form>
      <div className={style.colon_wrapper}>
        <div className={style.first_colon}>
          <FormItem title={'Title'} type={'text'} placeholder={'name'} />
          <FormItem title={'Movie URl'} type={'url'} placeholder={'https://'} />
          <label className={style.input_title}>
            Genre
            <Select
              multiple
              options={options}
              value={value1}
              onChange={o => setValue1(o)}
            />
          </label>
          <br />
        </div>
        <div className={style.second_colon}>
          <FormItem title={'RELEASE DATE'} type={'date'} placeholder={'Select Date'} />
          <FormItem title={'RATING'} type={'text'} placeholder={'7.8'} />
          <FormItem title={'RUNTIME'} type={'text'} placeholder={'minutes'} />
        </div>
      </div>
      <FormItem title={'OVERVIEW'} type={'textarea'} placeholder={'Movie description'} />
      <div className={style.group_button}>
        <Button title={'reset'} classname={'reset_button'} />
        <Button title={'submit'} />
      </div>
    </form>
  </>
  )


}

export default BasicForm
