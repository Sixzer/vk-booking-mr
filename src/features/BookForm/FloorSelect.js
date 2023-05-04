import { useState } from "react";
import Select from "react-select";

const options = Array.from({ length: 25 }, (_, i) => ({
    value: i + 3,
    label: `Этаж ${i + 3}`,
}));

const FloorSelect = () => {
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

export default FloorSelect;
