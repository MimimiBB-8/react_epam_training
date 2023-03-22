import style from './Imgsource.module.scss'
import Image from 'next/image';
interface ImgProps {
  alt?: string
  urlProp: string
  onclick?: (param:any) => void
}

const ImgSource = ({ alt = 'photo', urlProp, onclick }: ImgProps) => (
  <>
    <Image
      className={`${style.poster} img_source`}
      src={urlProp}
      alt={alt}
      onClick={onclick}
      width={455}
      height={322}
    />
  </>
)

export default ImgSource
