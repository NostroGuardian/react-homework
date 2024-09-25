import { RatingProps } from './Rating.props';
import styles from './Rating.module.css';
import cn from 'classnames';

function Rating({ count, className }: RatingProps) {
	return (
		<div className={cn(styles['rating'], className)}>
			<img src="/rating-icon.svg" alt="Rating" />
			{count}
		</div>
	);
}

export default Rating;
