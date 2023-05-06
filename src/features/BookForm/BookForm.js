import TowerSelect from "../TowerSelect/TowerSelect";
import FloorSelect from "../FloorSelect/FloorSelect";
import MeetRoomSelect from "../MeetRoomSelect/MeetRoomSelect";
import DateSelect from "../DateSelect/DateSelect";
import TimeRangeSelect from "../TimeRangeSelect/TimeRangeSelect";
import CommentInput from "../CommentInput/CommentInput";
import "./bookForm.css";

function BookForm() {
    return (
        <form action="submit" className="bookForm">
            <div className="bookForm-dropdowns">
                <TowerSelect />
                <FloorSelect />
                <MeetRoomSelect />
                <DateSelect />
                <TimeRangeSelect />
            </div>
            <div className="bookForm-textArea">
                <CommentInput />
            </div>
            <div className="bookForm-buttons">
                <button className="bookForm-buttons__submit">Отправить</button>
                <button className="bookForm-buttons__reset">Очистить</button>
            </div>
        </form>
    );
}

export default BookForm;
