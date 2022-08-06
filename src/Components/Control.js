export default function Control({ children, expanded = undefined }) {
	return <div className={`control ${expanded ? 'is-expanded' : ''} `}>{children}</div>
}
