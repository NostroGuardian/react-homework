import './NavigationLink.css';

function NavigationLink({ href, text, isActive, icon }) {
	const activeStyle =
		'navigation__link' + (isActive === true ? ' ' + 'navigation__link_active' : '');
	return (
		<a href={href} className={activeStyle}>
			{text}
			{icon ? icon : ''}
		</a>
	);
}

export default NavigationLink;
