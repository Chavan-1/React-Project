import styles from './Button.module.css'

// const Button = (props) => {
const Button = ({ isOutline, icon, text, ...rest }) => {
    // const {isOutline, icon, text} = props; //de-dtructing
  return (
    // <button className={props.isOutline ? styles.outline_btn : styles.primary_btn}>
    <button 
      {...rest} 
      className={isOutline ? styles.outline_btn : styles.primary_btn}
    >
        {/* {props.icon}
        {props.text} */}
        {icon}
        {text}
    </button>
  );
};

export default Button;