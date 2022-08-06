import { useReducer } from 'react'
import Task from './Task'
import AddForm from './AddForm'
import Container from './Components/Container'
import reducer from './Store/reducer'

function App() {
	const [tasks, dispatch] = useReducer(reducer, [], () => [])

	return (
		<Container>
			<AddForm onAdd={task => dispatch({ type: 'add', payload: task })} />
			{tasks.map(task => (
				<Task
					key={task.id}
					task={task}
					onDelete={() => dispatch({ type: 'delete', payload: task.id })}
					onDone={() => dispatch({ type: 'done', payload: task.id })}
					onEdit={() => dispatch({ type: 'edit', payload: task.id })}
					onEditDone={task => dispatch({ type: 'editDone', payload: task })}
					onEditCancel={id => dispatch({ type: 'editCancel', payload: id })}
				/>
			))}
		</Container>
	)
}

export default App
