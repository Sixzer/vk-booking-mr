import DatePicker from "react-date-picker";
import { useDispatch, useSelector } from "react-redux";
import { selectDate, formatDate } from "../BookForm/bookFormSlice";

import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import "./dateSelect.scss";

const DateSelect = () => {
    const dispatch = useDispatch();
    const selectedOption = useSelector((state) => state.bookForm.date.value);

    const handleChangeDate = (selectedOption) => {
        if (selectedOption) {
            selectedOption = formatDate(selectedOption);
        }

        dispatch(selectDate(selectedOption));
    };

    return (
        <DatePicker
            required={true}
            className={"bookForm-dropdowns__dateSelect"}
            value={selectedOption}
            format={"y/MM/dd"}
            minDate={new Date()}
            dayPlaceholder={"дд"}
            monthPlaceholder={"мм"}
            yearPlaceholder={"гггг"}
            onChange={handleChangeDate}
            clearIcon={null}
            calendarIcon={null}
        />
    );
};

export default DateSelect;
