import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { selectMR } from "../BookForm/bookFormSlice";
import "./meetRoomSelect.scss";

const MEETROOMS = 10;
const options = [];

for (let i = 1; i <= MEETROOMS; i++) {
    options.push({
        value: i,
        label: `Переговорная №${i}`,
    });
}

const MeetRoomSelect = () => {
    const selectedOption = useSelector((state) => state.bookForm.meetingRoom);
    const dispatch = useDispatch();

    const handleChange = (selectedOption) => {
        dispatch(selectMR(selectedOption));
    };

    return (
        <Select
            required
            className={"bookForm-dropdowns__meetRoomSelect"}
            placeholder={"Переговорная..."}
            value={selectedOption}
            onChange={handleChange}
            options={options}
        />
    );
};

export default MeetRoomSelect;
