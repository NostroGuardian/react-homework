import './Input.css';

function Input({ placeholder, isSearch }) {
	const cl = 'input' + (isSearch === true ? ' ' + 'input-search' : '');
	return <input type="text" className={cl} placeholder={placeholder} />;
}

export default Input;
