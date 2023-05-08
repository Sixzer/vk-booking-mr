import DatePicker from "react-date-picker";
import { useDispatch, useSelector } from "react-redux";
import { selectDate } from "../BookForm/bookFormSlice";

import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import "./dateSelect.css";

const DateSelect = () => {
    const dispatch = useDispatch();
    const selectedOption = useSelector((state) => state.bookForm.date.value);

    function formatDate(date) {
        let d = new Date(date),
            month = "" + (d.getMonth() + 1),
            day = "" + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2) month = "0" + month;
        if (day.length < 2) day = "0" + day;

        return [year, month, day].join("/");
    }

    const handleChangeDate = (selectedOption) => {
        dispatch(
            selectDate(selectedOption ? formatDate(selectedOption) : null)
        );
    };

    return (
        <DatePicker
            required={true}
            value={selectedOption}
            format={"y/MM/dd"}
            minDate={new Date()}
            dayPlaceholder={"дд"}
            monthPlaceholder={"мм"}
            yearPlaceholder={"гггг"}
            onChange={handleChangeDate}
            className={"timerselect"}
            clearIcon={null}
        />
    );
};

export default DateSelect;
