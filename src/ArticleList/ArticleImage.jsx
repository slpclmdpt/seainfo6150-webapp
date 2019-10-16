import React from "react";
import styles from "./ArticleImage.module.css";

const ArticleImage = ({url, title}) => {
	return (
		<img className={styles.shape} src={url} title={title} alt={title}></img>
	);
}


export default ArticleImage;