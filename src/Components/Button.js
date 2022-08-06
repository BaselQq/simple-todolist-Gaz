import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faUndo, faEdit, faTrash, faCancel, faAdd } from '@fortawesome/free-solid-svg-icons'

export default function Button({ icon = 'done', classNames = '', onClick = () => {}, color = 'blue', disabled = undefined }) {
	const colors = {
		red: 'is-danger',
		black: 'is-dark',
		green: 'is-success',
		yellow: 'is-warning',
		blue: 'is-info',
	}

	const icons = {
		undo: faUndo,
		done: faCheck,
		delete: faTrash,
		cancel: faCancel,
		edit: faEdit,
		add: faAdd,
	}

	return (
		<button className={`button ${classNames} ${colors[color]}`} onClick={onClick} disabled={disabled}>
			<FontAwesomeIcon icon={icons[icon]} />
		</button>
	)
}
