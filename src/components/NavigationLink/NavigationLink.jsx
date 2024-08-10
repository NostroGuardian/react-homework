import styles from './NavigationLink.module.css';
import cn from 'classnames';

function NavigationLink({ href, text, isActive, icon }) {
	return (
		<a
			href={href}
			className={cn(styles['navigation__link'], {
				[styles['navigation__link_active']]: isActive,
			})}
		>
			{text}
			{icon ? icon : ''}
		</a>
	);
}

export default NavigationLink;
