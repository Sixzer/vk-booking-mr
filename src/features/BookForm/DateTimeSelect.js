import { useState } from "react";
import DatePicker from "react-date-picker";
import TimeRangePicker from "@wojtekmaj/react-timerange-picker";
import { useDispatch } from "react-redux";
import { selectDate, selectTime } from "./bookFormSlice";
// import "react-datepicker/dist/react-datepicker.css";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import "@wojtekmaj/react-timerange-picker/dist/TimeRangePicker.css";
import "react-clock/dist/Clock.css";

const DateTimeSelect = () => {
    const dispatch = useDispatch();
    const [startDate, setStartDate] = useState(null);
    const [startTime, setStartTime] = useState([null, null]);

    const handleChangeDate = (selectedOption) => {
        setStartDate(selectedOption);
        dispatch(selectDate(selectedOption.toLocaleDateString()));
        console.log(selectedOption instanceof Date);
    };

    const handleChangeTime = (selectedOption) => {
        setStartTime(selectedOption);
        dispatch(selectTime(selectedOption));
    };

    return (
        <>
            <DatePicker
                required={true}
                value={startDate}
                format={"d-MM-y"}
                // returnValue={"end"}
                onChange={handleChangeDate}
                className={"timerselect"}
            />
            <TimeRangePicker
                required={true}
                onChange={handleChangeTime}
                value={startTime}
                disableClock={true}
                className={"timerselect"}
            />
        </>
    );
};

export default DateTimeSelect;
