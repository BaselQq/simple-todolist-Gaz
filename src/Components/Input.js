export default function Input({ value, onChange, placeholder, ...rest }) {
	return <input className="input" value={value} placeholder={placeholder} onChange={e => onChange(e.target.value)} {...rest} />
}
