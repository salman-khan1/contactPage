import styles from './Button.module.css'
// import {MdMessage} from 'react-icons/md'


// eslint-disable-next-line react/prop-types
const Button = ({isOutline,text,icon,...rest}) => {

  return (
    <button {...rest} className={`${isOutline?styles.outline_btn: styles.primary_btn}`}>
        {/* <MdMessage fontSize='24px'/> */}
        {icon}
        {text}
    </button>
  )
}

export default Button