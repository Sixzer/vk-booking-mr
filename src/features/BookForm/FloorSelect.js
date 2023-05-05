import { useState } from "react";
import Select from "react-select";

const FLOORS = 27;
const options = [];

for (let i = 3; i <= FLOORS; i++) {
    options.push({
        value: i,
        label: `Этаж ${i}`,
    });
}

const FloorSelect = () => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleChange = (selectedOption) => {
        setSelectedOption(selectedOption);
        console.log(selectedOption);
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
