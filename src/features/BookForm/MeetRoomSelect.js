import { useState } from "react";
import Select from "react-select";

const options = Array.from({ length: 10 }, (_, i) => ({
    value: i + 1,
    label: `Переговорная ${i + 1}`,
}));

const MeetRoomSelect = () => {
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

export default MeetRoomSelect;
