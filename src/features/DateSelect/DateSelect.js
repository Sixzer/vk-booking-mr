import { useState } from "react";
import DatePicker from "react-date-picker";
import { useDispatch } from "react-redux";
import { selectDate } from "../BookForm/bookFormSlice";

import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import "@wojtekmaj/react-timerange-picker/dist/TimeRangePicker.css";
import "react-clock/dist/Clock.css";

const DateSelect = () => {
    const dispatch = useDispatch();
    const [startDate, setStartDate] = useState(new Date());

    const handleChangeDate = (selectedOption) => {
        setStartDate(selectedOption);
        dispatch(selectDate(selectedOption.toLocaleDateString()));
    };

    return (
        <DatePicker
            required={true}
            value={startDate}
            format={"d-MM-y"}
            onChange={handleChangeDate}
            className={"timerselect"}
        />
    );
};

export default DateSelect;
