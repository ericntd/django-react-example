import React from 'react';

class Comment extends React.Component {
	render() {
		return (
			<div>
				<h3>{this.props.author}</h3>
				{this.props.comment_text}
			</div>
		);
	}
}

export default Comment;
