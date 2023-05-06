import { createSlice } from "@reduxjs/toolkit";

const bookFormSlice = createSlice({
    name: "bookForm",
    initialState: {
        tower: "tower",
        floor: "floor",
        meetingRoom: "mr",
        date: new Date().toLocaleDateString(),
        timeRange: [null, null],
        comment: "comment",
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
                startValue: action.payload[0],
                endValue: action.payload[1],
            };
        },
        addComment: (state, action) => {
            state.comment = action.payload;
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
