import { useDispatch } from "react-redux";
import {
    selectTower,
    selectFloor,
    selectDate,
    selectMR,
    selectTime,
    addComment,
} from "../BookForm/bookFormSlice";

function ResetButton() {
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(selectTower(null));
        dispatch(selectFloor(null));
        dispatch(selectMR(null));
        dispatch(selectDate(null));
        dispatch(selectTime(null));
        dispatch(addComment(""));
    };

    return (
        <button className="bookForm-buttons__reset" onClick={handleSubmit}>
            Очистить
        </button>
    );
}

export default ResetButton;
