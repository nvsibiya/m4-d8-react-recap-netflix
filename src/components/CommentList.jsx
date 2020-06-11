import React from 'react';
import { ListGroup, Badge } from 'react-bootstrap';

const CommentList = (props) => {
    props.comments.map ((comment) => (
        <ListGroup key={comment._id}>
            <ListGroup.Item>
                <Badge pill variant="primary" className="mr-3">
                {comment.rate}
            </Badge>
            {comment.comment}
            </ListGroup.Item>
            
        </ListGroup>
    ));
};

export default CommentList;