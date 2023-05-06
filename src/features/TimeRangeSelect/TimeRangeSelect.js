import { useState } from "react";
import TimeRangePicker from "@wojtekmaj/react-timerange-picker";
import { useDispatch } from "react-redux";
import { selectTime } from "../BookForm/bookFormSlice";

import "@wojtekmaj/react-timerange-picker/dist/TimeRangePicker.css";
import "react-clock/dist/Clock.css";

function TimeRangeSelect() {
    const dispatch = useDispatch();
    const [startTime, setStartTime] = useState([null, null]);

    const handleChangeTime = (selectedOption) => {
        setStartTime(selectedOption);
        dispatch(selectTime(selectedOption));
    };

    return (
        <TimeRangePicker
            required={true}
            onChange={handleChangeTime}
            value={startTime}
            disableClock={true}
            className={"timerselect"}
        />
    );
}

export default TimeRangeSelect;
