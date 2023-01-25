// interface IportalProps{
//   children: any
//   open: boolean
//   onClose: any
// }
// const Portal =  ({children, open, onClose}:IportalProps) =>{
//   const modalRootElement = document.getElementById('react-modals');
//
//   const  elem = useMemo(() => document.createElement('div'), [])
//   useEffect(()=>{
//     modalRootElement?.appendChild(elem);
//     return()=>{
//       modalRootElement?.removeChild(elem);
//     }
//   })
//     return createPortal(<div>bbbb</div>, elem)
//
//
// }
//
// export default Portal

import React, {useEffect, useMemo} from 'react'
import ReactDOM from 'react-dom'
const modalRootElement = document.getElementById('react-modals') as HTMLElement;

interface portalProps{
  children?: React.ReactNode
}
 const Portal = ({children}:portalProps) =>{
   const  elem = useMemo(() => document.createElement('div'), [])
  useEffect(()=>{
    modalRootElement?.appendChild(elem);
    return()=>{
      modalRootElement?.removeChild(elem);
    }
  })
   return ReactDOM.createPortal(children, elem);
 }

export default Portal

