import React from "react";
import SlugButton from "./SlugButton";
import styles from "./ArticleListItem.module.css";

const ArticleListItem = ({article}) => {
	return (
		<section className={styles.section}>
			<h2 className={styles.header}>{article.title}</h2>
			<p>{article.shortText}</p>
			<div className={styles.info}> 
				<time className={styles.bold}>{article.pubDate}</time>
				<SlugButton buttonText = {article.author} slug = {article.slug}/>			
			</div>
		</section>
	);
}

export default ArticleListItem;