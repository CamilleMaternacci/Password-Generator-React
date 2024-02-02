import styles from './InputLengthPassword.module.scss'

export const InputLengthPassword = ({min, max, value, onChange}) => {
	return (
		<div className={styles.inputRangeArea}>
			<input type='range' className={styles.inputRange} min={min} max={max} value={value} onChange={onChange} />
		</div>
	)
}
