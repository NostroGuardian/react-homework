import styles from './NavigationLink.module.css';
import cn from 'classnames';
import { NavigationLinkProps } from './NavigationLink.props';
import { NavLink } from 'react-router-dom';

function NavigationLink({ to, text, icon, ...others }: NavigationLinkProps) {
	return (
		<NavLink
			to={to}
			className={({ isActive }) =>
				cn(styles['navigation__link'], {
					[styles['navigation__link_active']]: isActive,
				})
			}
			{...others}
		>
			{text}
			{icon ? icon : ''}
		</NavLink>
	);
}

export default NavigationLink;
