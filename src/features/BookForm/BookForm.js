import TowerSelect from "../TowerSelect/TowerSelect";
import FloorSelect from "../FloorSelect/FloorSelect";
import MeetRoomSelect from "../MeetRoomSelect/MeetRoomSelect";
import DateSelect from "../DateSelect/DateSelect";
import TimeRangeSelect from "../TimeRangeSelect/TimeRangeSelect";
import CommentInput from "../CommentInput/CommentInput";
import ResetButton from "../ResetButton/ResetButton";
import SubmitButton from "../SubmitButton/SubmitButton";
import "./bookForm.scss";

function BookForm() {
    return (
        <form className="bookForm">
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
                <SubmitButton />
                <ResetButton />
            </div>
        </form>
    );
}

export default BookForm;
