import React, {PureComponent} from 'react';
import CommentList from "../commentList/CommentList";
import {connect} from 'react-redux';
import {deleteArticle} from "../../actionCreator";
import './Article.less'

class Article extends PureComponent {
    state = {
        openItemId: null,
        isOpen: null
    };

    toggleOpenItem = (openItemId) =>
        this.setState({
            openItemId: openItemId === this.state.openItemId ? null : openItemId
        });

    get articleText() {
        const {article} = this.props;
        if (!this.state.openItemId) return null;
        return (
            <section className='article-item_text'>
                {article.text}
                <CommentList
                    isOpen
                    article={article}
                    toggleOpen={this.onBthClick}
                />
            </section>
        )
    }

    onBthClick = () => {
        const {article} = this.props;
        this.toggleOpenItem(article.id);
        this.setState({isOpen: !this.state.isOpen})
    };

    handleDeleteClick = () => {
        const {deleteArticle, article} = this.props;
        deleteArticle(article.id);
    };

    render() {
        const {article} = this.props;
        const {isOpen} = this.state;
        const text = isOpen ? 'Close text' : 'Show text';
        return (
            <div className='article-item'>
                <div className='article-item_icon'>
                </div>
                <div className='article-item_content'>
                    <h3 className='article-item_header'>{article.title}</h3>
                    <button
                        className='article-item_open-button btn btn-primary'
                        onClick={this.onBthClick}>{text}</button>
                    {this.articleText}
                    <button
                        className='article-item_delete-button btn btn-danger'
                        onClick={this.handleDeleteClick}>Delete
                    </button>
                </div>
            </div>
        );
    }
}

export default connect(null, {deleteArticle})(Article);