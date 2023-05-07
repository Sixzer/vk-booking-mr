import DatePicker from "react-date-picker";
import { useDispatch, useSelector } from "react-redux";
import { selectDate } from "../BookForm/bookFormSlice";

import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import "@wojtekmaj/react-timerange-picker/dist/TimeRangePicker.css";
import "react-clock/dist/Clock.css";

const DateSelect = () => {
    const dispatch = useDispatch();
    const selectedOption = useSelector((state) => state.bookForm.date.value);

    const handleChangeDate = (selectedOption) => {
        dispatch(
            selectDate(
                selectedOption
                    ? selectedOption.toLocaleDateString("en-GB")
                    : null
            )
        );
    };

    return (
        <DatePicker
            required={true}
            value={selectedOption}
            format={"MM/dd/y"}
            locale={"en-GB"}
            dayPlaceholder={"дд"}
            monthPlaceholder={"мм"}
            yearPlaceholder={"гггг"}
            onChange={handleChangeDate}
            className={"timerselect"}
            // clearIcon={null}
        />
    );
};

export default DateSelect;
