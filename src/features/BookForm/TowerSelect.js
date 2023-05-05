import { useState } from "react";
import Select from "react-select";
import { useDispatch } from "react-redux";
import { selectTower } from "./bookFormSlice";

const options = [
    { value: "A", label: "Башня А" },
    { value: "B", label: "Башня Б" },
];

const TowerSelect = () => {
    const dispatch = useDispatch();
    const [selectedOption, setSelectedOption] = useState(null);

    const handleChange = (selectedOption) => {
        setSelectedOption(selectedOption);
        dispatch(selectTower(selectedOption));
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

export default TowerSelect;
