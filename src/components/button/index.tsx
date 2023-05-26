import styles from './styles.module.scss';

interface Props {
  text: string,
}

export function Button({text}:Props){
    return(
        <button className={styles.btn}>{text}</button>
    )
}