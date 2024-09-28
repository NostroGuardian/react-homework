import styles from './PageTitle.module.css';
import { PageTitleProps } from './PageTitle.props';

function PageTitle({ text }: PageTitleProps) {
	return <h1 className={styles['page-title']}>{text}</h1>;
}

export default PageTitle;
