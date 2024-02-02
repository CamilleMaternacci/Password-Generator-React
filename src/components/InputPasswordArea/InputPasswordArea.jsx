import { useState } from 'react'
import styles from './InputPasswordArea.module.scss'

export const InputPasswordArea = ({valuePassword, onClick,  onClickCopy, checked, buttonIcon, buttonText}) => {
	const [showPassword, setShowPassword] = useState(false)

	const toggleShowPassword = () => {
		setShowPassword(showPassword => !showPassword)
	}

	return (
		<div className={styles.inputPasswordArea}>
			<div className={styles.inputArea}>
				<button className={styles.buttonInput}>
					<input type={showPassword ? 'text' : 'password'} name='' id='' className={styles.input} readOnly value={valuePassword} />
					<i
						className={showPassword ? `fa-solid fa-eye ${styles.eyeIcon}` : `fa-solid fa-eye-slash ${styles.eyeIcon}`}
						onClick={toggleShowPassword}></i>
				</button>{' '}
				<button className={styles.buttonAnkle}>
					<i className={`fa-solid fa-dice ${styles.ankleIcon}`} onClick={onClick}></i>
				</button>
			</div>
			<div className={styles.copyArea}>
				<div>
					<input type="checkbox" readOnly checked={checked}/> <label htmlFor="" className={styles.checkboxText}>Strong Password</label>
				</div>
				<button className={styles.copyPassword} onClick={onClickCopy}>
					{buttonIcon} {buttonText}
				</button>
			</div>
		</div>
	)
}
