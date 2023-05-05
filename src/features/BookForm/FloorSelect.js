import { useState } from "react";
import Select from "react-select";
import { useDispatch } from "react-redux";
import { selectFloor } from "./bookFormSlice";

const FLOORS = 27;
const options = [];

for (let i = 3; i <= FLOORS; i++) {
    options.push({
        value: i,
        label: `Этаж ${i}`,
    });
}

const FloorSelect = () => {
    const dispatch = useDispatch();
    const [selectedOption, setSelectedOption] = useState(null);

    const handleChange = (selectedOption) => {
        setSelectedOption(selectedOption);
        dispatch(selectFloor(selectedOption));
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

export default FloorSelect;
