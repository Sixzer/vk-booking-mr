import { useSelector } from "react-redux";
import "./submitButton.scss";

function SubmitButton() {
    const store = useSelector((state) => state.bookForm);

    const { tower, floor, meetingRoom, date, timeRange } = store;

    const handleSubmit = (e) => {
        if (
            ![tower, floor, meetingRoom, date.value, timeRange.value].some(
                (el) => el === null
            )
        ) {
            e.preventDefault();
            console.log(JSON.stringify(store));
        }
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
