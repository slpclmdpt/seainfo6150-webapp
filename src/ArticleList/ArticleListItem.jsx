import React from "react";
import SlugButton from "./SlugButton";
import ArticleImage from "./ArticleImage.jsx";
import styles from "./ArticleListItem.module.css";

const ArticleListItem = ({article}) => {
	return (
		<section className={styles.section}>
			<div className={styles.left}>
				<ArticleImage url={article.image._url} title={article.title}/>
			</div>
			<div className={styles.right}>
				<h2 className={styles.header}>{article.title}</h2>
				<p className={styles.start}>{article.shortText}</p>
				<div className={styles.info}> 
					<time className={styles.bold}>{article.pubDate}</time>			
				</div>
				<div className={styles.button}>
					<SlugButton buttonText = {article.author} slug = {article.slug}/>
				</div>
			</div>
		</section>
	);
}

export default ArticleListItem;