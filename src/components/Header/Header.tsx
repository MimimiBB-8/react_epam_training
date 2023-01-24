import style from './Header.module.scss'
import SearchForm from './SearchForm'
import Button from '../Button/Button'
import {useState, useEffect} from 'react'
import AddMovie from '../AddMovie/AddMovie'

interface HeaderProps {
  status: string
  updateStatus: (arg: string) => void
}

const Header = ({updateStatus, status}:HeaderProps) => {

  const [firstChildName, setFirstChildName] = useState<string>('')

  useEffect(() => {

    setFirstChildName(status)

  },[status])

  return(
    <div className={style.header}>
      <div className={style.content}>
        <div className={style.first_line}>
          <label className={style.logo}>
            <span>netflix</span>roulette
          </label>
          <Button classname={'add_movie'} title={'+ ADD MOVIE'} onClick={()=>updateStatus('show')}/>
        </div>
        <div className={style.search_content}>
          <h2>FIND YOUR MOVIE</h2>
          <SearchForm />
        </div>
      </div>
    </div>
  )
}



export default Header
