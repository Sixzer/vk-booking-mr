import FloorSelect from "./FloorSelect";
import TowerSelect from "./TowerSelect";
import MeetRoomSelect from "./MeetRoomSelect";
import DateTimeSelect from "./DateTimeSelect";
import CommentInput from "./CommentInput";
import "./bookForm.css";

function BookForm() {
    return (
        <form action="submit" className="bookForm">
            <div className="bookForm-dropdowns">
                <TowerSelect />
                <FloorSelect />
                <MeetRoomSelect />
                <DateTimeSelect />
            </div>
            <div className="bookForm-textArea">
                <CommentInput />
            </div>
            <div className="bookForm-buttons">
                <button type="submit" className="bookForm-buttons__submit">
                    Отправить
                </button>
                <button type="reset" className="bookForm-buttons__reset">
                    Очистить
                </button>
            </div>
        </form>
    );
}

export default BookForm;
