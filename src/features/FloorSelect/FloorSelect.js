import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { selectFloor } from "../BookForm/bookFormSlice";
import "./floorSelect.scss";

const FLOORS = 27;
const options = [];

for (let i = 3; i <= FLOORS; i++) {
    options.push({
        value: i,
        label: `Этаж ${i}`,
    });
}

const FloorSelect = () => {
    const selectedOption = useSelector((state) => state.bookForm.floor);
    const dispatch = useDispatch();

    const handleChange = (selectedOption) => {
        dispatch(selectFloor(selectedOption));
    };

    return (
        <Select
            required
            className={"bookForm-dropdowns__floorSelect"}
            placeholder={"Этаж..."}
            value={selectedOption}
            onChange={handleChange}
            options={options}
        />
    );
};

export default FloorSelect;
