import { useState } from "react";
import Select from "react-select";
import { useDispatch } from "react-redux";
import { selectMR } from "./bookFormSlice";

const MEETROOMS = 10;
const options = [];

for (let i = 1; i <= MEETROOMS; i++) {
    options.push({
        value: i,
        label: `Переговорная №${i}`,
    });
}

const MeetRoomSelect = () => {
    const dispatch = useDispatch();
    const [selectedOption, setSelectedOption] = useState(null);

    const handleChange = (selectedOption) => {
        setSelectedOption(selectedOption);
        dispatch(selectMR(selectedOption));
    };

    return (
        <Select
            required
            placeholder={"Выбрать..."}
            value={selectedOption}
            onChange={handleChange}
            options={options}
        />
    );
};

export default MeetRoomSelect;
