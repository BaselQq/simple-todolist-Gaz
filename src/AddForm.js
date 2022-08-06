import { useState } from 'react'
import Input from './Components/Input'
import Button from './Components/Button'
import Control from './Components/Control'
import Field from './Components/Field'
import generateId from './Utils/generateId'

export default function AddForm({ onAdd }) {
	const [name, setName] = useState('')
	const createTask = name => ({ id: generateId(), name, done: false, edited: false })

	const handleOnInput = () => {
		if (!name) return
		onAdd(createTask(name))
		setName('')
	}

	return (
		<Field hasAddons>
			<Control expanded>
				<Input placeholder="Create a todo" value={name} onChange={v => setName(v)} onKeyPress={e => e.key === 'Enter' && handleOnInput()} />
			</Control>
			<Control>
				<Button color="blue" icon="add" onClick={handleOnInput} disabled={!name} />
			</Control>
		</Field>
	)
}
