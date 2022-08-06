export default function Text({ color = 'black', text }) {
	const colors = {
		green: 'has-text-success',
		black: 'has-text-black',
	}

	return <h3 className={`title is-3 ${colors[color]}`}>{text}</h3>
}
