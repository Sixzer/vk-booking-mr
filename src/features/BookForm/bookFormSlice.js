import { createSlice } from "@reduxjs/toolkit";

export const formatDate = (date) => {
    let d = new Date(date),
        month = "" + (d.getMonth() + 1),
        day = "" + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("/");
};

const bookFormSlice = createSlice({
    name: "bookForm",
    initialState: {
        tower: null,
        floor: null,
        meetingRoom: null,
        date: { value: formatDate(new Date()) },
        timeRange: { value: ["9:00", "10:00"] },
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
