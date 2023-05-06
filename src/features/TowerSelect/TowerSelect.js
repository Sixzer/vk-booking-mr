import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { selectTower } from "../BookForm/bookFormSlice";

const options = [
    { value: "A", label: "Башня А" },
    { value: "B", label: "Башня Б" },
];

const TowerSelect = () => {
    const dispatch = useDispatch();

    let selectedOption = useSelector((state) => state.bookForm.tower);
    // console.log(selectedOption);

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
