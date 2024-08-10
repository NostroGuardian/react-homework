import styles from './PageTitle.module.css';

function PageTitle({ text }) {
	return <h1 className={styles['page-title']}>{text}</h1>;
}

export default PageTitle;
