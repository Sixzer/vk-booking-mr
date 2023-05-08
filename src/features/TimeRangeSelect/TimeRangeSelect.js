import TimeRangePicker from "@wojtekmaj/react-timerange-picker";
import { useDispatch, useSelector } from "react-redux";
import { selectTime } from "../BookForm/bookFormSlice";

import "@wojtekmaj/react-timerange-picker/dist/TimeRangePicker.css";
import "react-clock/dist/Clock.css";

function TimeRangeSelect() {
    const dispatch = useDispatch();
    const selectedOption = useSelector(
        (state) => state.bookForm.timeRange.value
    );

    const handleChangeTime = (selectedOption) => {
        selectedOption[1] < selectedOption[0]
            ? dispatch(selectTime([selectedOption[0], selectedOption[0]]))
            : dispatch(selectTime(selectedOption));
    };

    return (
        <TimeRangePicker
            required={true}
            onChange={handleChangeTime}
            value={selectedOption}
            disableClock={true}
            className={"timerselect"}
            clearIcon={null}
        />
    );
}

export default TimeRangeSelect;
