import React from "react";

const ArticleListItem = ({article}) => {
	return (
		<section>
			<h2>{article.title}</h2>
			<p>{article.shortText}</p>
			<time>{article.pubDate}</time>
			<button onClick={() => alert(`${article.slug}`)}>show article slug</button>
		</section>
	);
}

export default ArticleListItem;