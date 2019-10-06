import React from "react";
import PropTypes from 'prop-types'
import ArticleListItem from "./ArticleListItem.jsx"
import styles from "./ArticleList.module.css";

const ArticleList = props => {
  return (
    <ul className={styles.list}>
      {props.articles.map(article => (
        <li className={styles.section} key={article.slug}><ArticleListItem article={article}/></li>
      ))}
    </ul>
  );
};

ArticleList.propTypes = {
  articles: PropTypes.array.isRequired
};
export default ArticleList;
