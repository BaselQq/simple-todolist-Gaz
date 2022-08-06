import { useState } from 'react'
import Buttons from './Components/Buttons'
import Button from './Components/Button'
import Input from './Components/Input'
import Control from './Components/Control'
import Text from './Components/Text'
import Field from './Components/Field'

export default function Task({ task, onDone, onDelete, onEdit, onEditDone, onEditCancel }) {
	const [name, setName] = useState(task.name)

	const handleOnEditDone = () => {
		if (!name) return
		onEditDone({ ...task, name })
	}

	const handleOnEditCancel = () => {
		onEditCancel(task.id)
		setName(task.name)
	}

	const editMode = {
		true: (
			<>
				<Button color="blue" icon="done" onClick={handleOnEditDone} disabled={name === task.name} />
				<Button color="red" icon="cancel" onClick={handleOnEditCancel} />
			</>
		),
		false: (
			<>
				<Button color={task.done ? 'black' : 'green'} icon={task.done ? 'undo' : 'done'} onClick={onDone} />
				<Button color="yellow" icon="edit" onClick={onEdit} disabled={task.done} />
				<Button color="red" icon="delete" onClick={onDelete} />
			</>
		),
	}

	return (
		<Field grouped className="has-background-info-light">
			<Control expanded>
				{task.edited ? <Input value={name} onChange={v => setName(v)} onKeyPress={e => e.key === 'Enter' && handleOnEditDone()} /> : <Text color={task.done ? 'green' : 'black'} text={task.name} />}
			</Control>
			<Control>
				<Buttons>{editMode[task.edited]}</Buttons>
			</Control>
		</Field>
	)
}
