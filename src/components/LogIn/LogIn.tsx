import FormItem from '../BasicForm/FormItem'
import Button from '../Button/Button'
import style from './Login.module.scss'

const LogIn = () => (
  <div className={style.background_wrapper}>
    <div className={style.wrapper_log}>
      <h2>LOG IN</h2>
      <form>
        <FormItem id={'login'} title={'User Id *'} type={'email'} placeholder={'enter user id'} />
        <FormItem id={'password'} title={'PASSWORD *'} type={'password'} placeholder={'enter password'} />
        <div className={style.group_button}>
          <Button classname={'reset_button'} title={'reset'} />
          <Button title={'log in'} classname={'delete_button'}/>
        </div>
      </form>
      <p className={style.note}>*Mandatory</p>
    </div>
    <h1>
      <span>netflix</span>roulette
    </h1>
  </div>
)

export default LogIn
