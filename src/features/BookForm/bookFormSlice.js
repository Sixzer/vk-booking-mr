import { createSlice } from "@reduxjs/toolkit";

const bookFormSlice = createSlice({
    name: "bookForm",
    initialState: {
        tower: null,
        floor: null,
        meetingRoom: null,
        date: { value: "2023/05/08" },
        timeRange: { value: ["10:00", "11:00"] },
        comment: { value: "" },
    },
    reducers: {
        selectTower: (state, action) => {
            state.tower = action.payload;
        },
        selectFloor: (state, action) => {
            state.floor = action.payload;
        },
        selectMR: (state, action) => {
            state.meetingRoom = action.payload;
        },
        selectDate: (state, action) => {
            state.date = { value: action.payload };
        },
        selectTime: (state, action) => {
            state.timeRange = {
                value: action.payload,
            };
        },
        addComment: (state, action) => {
            state.comment = { value: action.payload };
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
