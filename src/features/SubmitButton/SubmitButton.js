import { useSelector } from "react-redux";
import "./submitButton.css";

function SubmitButton() {
    const store = useSelector((state) => state.bookForm);

    const { tower, floor, meetingRoom, date, timeRange } = store;

    // console.log(tower, floor, meetingRoom, date, timeRange);

    const handleSubmit = (e) => {
        if (
            ![tower, floor, meetingRoom, date.value, timeRange.value].some(
                (el) => el === null
            )
        ) {
            e.preventDefault();
            console.log(JSON.stringify(store));
        }

        // e.preventDefault();
        // console.log(JSON.stringify(store));
    };

    return (
        <button
            type="submit"
            className="bookForm-buttons__submit"
            onClick={handleSubmit}
        >
            Отправить
        </button>
    );
}

export default SubmitButton;
