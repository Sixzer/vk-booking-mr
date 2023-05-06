import { useState } from "react";
import { useDispatch } from "react-redux";
import { addComment } from "../BookForm/bookFormSlice";

const CommentInput = () => {
    const [comment, setComment] = useState("");
    const dispatch = useDispatch();

    const handleCommentChange = (event) => {
        setComment(event.target.value);
        dispatch(addComment(event.target.value));
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
