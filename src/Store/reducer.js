export default function reducer(state, action) {
	switch (action.type) {
		case 'add':
			return state.findIndex(t => t.name === action.payload.name) === -1 ? [...state, action.payload] : [...state]
		case 'delete':
			return state.filter(t => t.id !== action.payload)
		case 'edit':
			return state.map(t => (t.id === action.payload ? { ...t, edited: true } : { ...t }))
		case 'done':
			return state.map(t => (t.id === action.payload ? { ...t, done: !t.done } : { ...t }))
		case 'editDone':
			return state.map(t => (t.id === action.payload.id ? { ...t, ...action.payload, edited: false } : { ...t }))
		case 'editCancel':
			return state.map(t => (t.id === action.payload ? { ...t, edited: false } : { ...t }))
		default:
			return [...state]
	}
}
