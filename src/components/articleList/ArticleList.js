import React, {Component} from 'react';
import Article from "../article/Article";
import {connect} from 'react-redux'
import './ArticleList.less'

class ArticleList extends Component {

    get items() {
        const {article, filteredArticles} = this.props;
        if (filteredArticles.length > 0) {
            return filteredArticles.map(article =>
                <li key={article.id}>
                    <Article
                        article={article}
                    />
                </li>
            )
        } else {
            return article.map(article =>
                <li key={article.id}>
                    <Article
                        article={article}
                    />
                </li>
            )
        }
    }

    render() {
        const {article} = this.props;
        const articleItems = article.length ? this.items : 'Статей нет!';
        return (
            <ul className='article-list'>
                {articleItems}
            </ul>
        );
    }
}

const mapStateToProps = (store) => ({
    article: store.articles.defaultArticles,
    filteredArticles: store.articles.filteredArticles,
});

export default connect(mapStateToProps)(ArticleList);