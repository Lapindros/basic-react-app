import React, {Component} from 'react';

class Comment extends Component {
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
        const text = isOpen ? 'Close comments' : 'Open comments';

        return (
            <ul>
                <button
                    onClick={this.onBthClick}
                >
                    {text}
                </button>
                {isOpen && this.comments}
            </ul>
        );
    }
}

export default Comment;