import styles from './NavigationLink.module.css';
import cn from 'classnames';

function NavigationLink({ href, text, isActive, icon, ...others }) {
	return (
		<a
			href={href}
			className={cn(styles['navigation__link'], {
				[styles['navigation__link_active']]: isActive,
			})}
			{...others}
		>
			{text}
			{icon ? icon : ''}
		</a>
	);
}

export default NavigationLink;
