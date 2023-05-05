import { createSlice } from "@reduxjs/toolkit";

const bookFormSlice = createSlice({
    name: "bookForm",
    initialState: {},
    reducers: {
        selectTower: (state, action) => {
            state.selectedTower = action.payload;
        },
        selectFloor: (state, action) => {
            state.selectedFloor = action.payload;
        },
        selectMR: (state, action) => {
            state.selectedMR = action.payload;
        },
        selectDate: (state, action) => {
            state.selectedDate = { value: action.payload };
        },
        selectTime: (state, action) => {
            state.selectedTime = {
                startValue: action.payload[0],
                endValue: action.payload[1],
            };
        },
        addComment: (state, action) => {
            state.addedComment = action.payload;
        },
    },
});

export const {
    selectTower,
    selectFloor,
    selectMR,
    selectDate,
    selectTime,
    addComment,
} = bookFormSlice.actions;

export default bookFormSlice.reducer;
