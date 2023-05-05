import { useState } from "react";
import DatePicker from "react-date-picker";
import TimeRangePicker from "@wojtekmaj/react-timerange-picker";
// import "react-datepicker/dist/react-datepicker.css";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import "@wojtekmaj/react-timerange-picker/dist/TimeRangePicker.css";
import "react-clock/dist/Clock.css";
import "./dataselect.css";

const DataSelect = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [startTime, setStartTime] = useState(["10:00", "11:00"]);

    return (
        <>
            <DatePicker
                value={startDate}
                onChange={(date) => setStartDate(date)}
                className={"timerselect"}
            />
            <TimeRangePicker
                onChange={setStartTime}
                value={startTime}
                disableClock={true}
                className={"timerselect"}
            />
        </>
    );
};

export default DataSelect;
