import styles from './FormsControls.module.css'

export const Textarea = ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error;
    return (
        <div className={hasError ? styles._ + " " + styles._error : styles._}>
            <p><textarea {...input} {...props} /></p>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}


export const Input = ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error;
    return (
        <div className={hasError ? styles._ + " " + styles._error : styles._}>
            <p><input {...input} {...props} /></p>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}
