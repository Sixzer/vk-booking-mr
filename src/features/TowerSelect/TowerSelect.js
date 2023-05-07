import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { selectTower } from "../BookForm/bookFormSlice";

const options = [
    { value: "А", label: "Башня А" },
    { value: "Б", label: "Башня Б" },
];

const TowerSelect = () => {
    const dispatch = useDispatch();
    const selectedOption = useSelector((state) => state.bookForm.tower);

    const handleChange = (selectedOption) => {
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
