import { useDispatch, useSelector } from "react-redux";
import { addComment } from "../BookForm/bookFormSlice";

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
            placeholder="Введите комментарий"
        />
    );
};

export default CommentInput;
