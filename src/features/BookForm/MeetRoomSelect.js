import { useState } from "react";
import Select from "react-select";

const MEETROOMS = 10;
const options = [];

for (let i = 1; i <= MEETROOMS; i++) {
    options.push({
        value: i,
        label: `Переговорная №${i}`,
    });
}

const MeetRoomSelect = () => {
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

export default MeetRoomSelect;
