import { useState } from 'react'
import styles from './App.module.scss'
import { CountInputLength } from './components/CountInputLength/CountInputLength'

import { InputLengthPassword } from './components/InputLengthPassword/InputLengthPassword'
import { InputPasswordArea } from './components/InputPasswordArea/InputPasswordArea'
import { InputChecked } from './components/InputChecked/InputChecked'

const smallLetters = 'abcdefghijlmnouprstwyxz'
const bigLetters = 'ABCDEFGHIJKLMNOUPRSTWYXZ'
const special = '!@#$%^&*()?'
const numbers = '0123456789'

function App() {
	const [password, setPassword] = useState('')

	const [strongPassword, setStrongPassword] = useState(false)

	const [lowerCase, setLowerCase] = useState(true)
	const [bigerCase, setBigerCase] = useState(true)
	const [numberCase, setNumberCase] = useState(true)
	const [symbolCase, setSymbolCase] = useState(true)

	const [lengthPassword, setLengthPassword] = useState(12)

	const [copiedPassword, setCopiedPassword] = useState(false)

	const generatePassword = () => {
		setCopiedPassword(false)

		let tempPassword = ''

		const getMissingCharacter = type => {
			switch (type) {
				case 'lower':
					return smallLetters.charAt(Math.floor(Math.random() * smallLetters.length))
				case 'bigger':
					return bigLetters.charAt(Math.floor(Math.random() * bigLetters.length))
				case 'number':
					return numbers.charAt(Math.floor(Math.random() * numbers.length))
				case 'symbol':
					return special.charAt(Math.floor(Math.random() * special.length))
				default:
					return ''
			}
		}

		const missingTypes = [
			lowerCase && 'lower',
			bigerCase && 'bigger',
			numberCase && 'number',
			symbolCase && 'symbol',
		].filter(type => type)

		for (let i = 0; i < lengthPassword; i++) {
			const typeIndex = i % missingTypes.length
			const missingType = missingTypes[typeIndex]
			const missingCharacter = getMissingCharacter(missingType)
			tempPassword += missingCharacter
		}
		setPassword(tempPassword)
	}

	const copyPassword = async () => {
		if (password.length) {
			await navigator.clipboard.writeText(password)
			setCopiedPassword(true)
		}
	}

	return (
		<div className={styles.appArea}>
			<InputPasswordArea
				valuePassword={password}
				onClick={generatePassword}
				checked={strongPassword}
				onClickCopy={copyPassword}
				buttonIcon={<i className='fa-solid fa-copy'></i>}
				buttonText={copiedPassword ? 'Copied' : 'Copy'}
			/>
			<InputLengthPassword
				min={6}
				max={32}
				value={lengthPassword}
				onChange={e => {
					setLengthPassword(e.target.value)

					if (e.target.value >= 14) {
						setStrongPassword(true)
					} else {
						setStrongPassword(false)
					}
				}}
			/>
			<div className={styles.lengthAndCharacters}>
				<CountInputLength lengthPassword={lengthPassword} />
				<div className={styles.inputsArea}>
					<InputChecked
						text='a-z'
						checked={lowerCase}
						onClick={() => setLowerCase(lowerCase => !lowerCase)}
						onClickLabel={() => setLowerCase(lowerCase => !lowerCase)}
					/>
					<InputChecked
						text='A-Z'
						checked={bigerCase}
						onClick={() => setBigerCase(bigerCase => !bigerCase)}
						onClickLabel={() => setBigerCase(bigerCase => !bigerCase)}
					/>
					<InputChecked
						text='0-9'
						checked={numberCase}
						onClick={() => setNumberCase(numberCase => !numberCase)}
						onClickLabel={() => setNumberCase(numberCase => !numberCase)}
					/>
					<InputChecked
						text='!@#'
						checked={symbolCase}
						onClick={() => setSymbolCase(symbolCase => !symbolCase)}
						onClickLabel={() => setSymbolCase(symbolCase => !symbolCase)}
					/>
				</div>
			</div>
		</div>
	)
}

export default App
