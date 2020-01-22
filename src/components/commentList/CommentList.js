import React, {Component} from 'react';
import './CommentList.less'

class CommentList extends Component {
    state = {
        isOpen: false,
    };

    get comments() {
        const {article} = this.props;
        return article.comments.map(item => {
            return (
                <li key={item.comment_id}>
                    {item.comment_text}
                </li>
            )
        })
    }

    onBthClick = () => {
        const {isOpen} = this.state;
        this.setState({isOpen: !isOpen})
    };

    render() {
        const {isOpen} = this.state;
        const buttonText = isOpen ? 'Close comments' : 'Open comments';

        return (
            <ul className='comment-list'>
                <button
                    className='btn btn-info'
                    onClick={this.onBthClick}
                >
                    {buttonText}
                </button>
                {isOpen && this.comments}
            </ul>
        );
    }
}

export default CommentList;