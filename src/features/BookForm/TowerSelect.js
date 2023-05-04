import { useState } from "react";
import Select from "react-select";

const options = [
    { value: "A", label: "Башня А" },
    { value: "B", label: "Башня Б" },
];

const TowerSelect = () => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleChange = (selectedOption) => {
        setSelectedOption(selectedOption);
    };

    return (
        <Select
            required
            value={selectedOption}
            onChange={handleChange}
            options={options}
        />
    );
};

export default TowerSelect;
