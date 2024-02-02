import styles from './CountInputLength.module.scss'

export const CountInputLength = ({ lengthPassword }) => {
	return (
		<p className={styles.characterText}>
			Character Length: <span className={styles.characterTextSpan}>{lengthPassword}</span>
		</p>
	)
}
