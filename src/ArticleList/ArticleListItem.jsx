import React from "react";
import SlugButton from "./SlugButton";
import ArticleImage from "./ArticleImage.jsx";
import styles from "./ArticleListItem.module.css";

const ArticleListItem = ({article}) => {
	return (
		<section className={styles.section}>
			<ArticleImage className={styles.image} url={article.image._url} title={article.title}/>
			<h2 className={styles.header}>{article.title}</h2>
			<p className={styles.start}>
				{article.shortText}
				<time className={styles.info}>{article.pubDate}</time>
			</p>			
			<SlugButton buttonText = {article.author} slug = {article.slug}/>
		</section>
	);
}

export default ArticleListItem;