import { useDispatch, useSelector } from "react-redux";
import { addComment } from "../BookForm/bookFormSlice";
import "./commentInput.scss";

const CommentInput = () => {
    const dispatch = useDispatch();
    const comment = useSelector((state) => state.bookForm.comment.value);

    const handleCommentChange = (event) => {
        dispatch(addComment(event.target.value));
    };

    return (
        <textarea
            value={comment}
            onChange={handleCommentChange}
            className={"bookForm-textArea__commentInput"}
            placeholder="Введите комментарий..."
        />
    );
};

export default CommentInput;
