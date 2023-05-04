import React, { useState } from "react";

const CommentInput = () => {
    const [comment, setComment] = useState("");

    const handleCommentChange = (event) => {
        setComment(event.target.value);
    };

    return (
        <textarea
            value={comment}
            onChange={handleCommentChange}
            placeholder="Введите комментарий"
        />
    );
};

export default CommentInput;
