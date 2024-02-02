import styles from './InputChecked.module.scss'

export const InputChecked = ({ text, value, checked, onClick, onClickLabel }) => {
	return (
		<div className={styles.inputCheck}>
			<input type='checkbox' name='' id='' checked={checked} readOnly value={value} onClick={onClick} />{' '}
			<label htmlFor='' className={styles.labelText} onClick={onClickLabel}>
				{text}
			</label>
		</div>
	)
}
