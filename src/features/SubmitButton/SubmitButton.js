import { useSelector } from "react-redux";

function SubmitButton() {
    const store = useSelector((state) => state.bookForm);
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(JSON.stringify(store));
    };
    return (
        <button className="bookForm-buttons__submit" onClick={handleSubmit}>
            Отправить
        </button>
    );
}

export default SubmitButton;
