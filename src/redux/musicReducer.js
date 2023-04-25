import { createSlice } from "@reduxjs/toolkit";

const audioSlice = createSlice({
    name: "audio",
    initialState: {
        isPlaying: false,
        src: "",
    },
    reducers: {
        playAudio(state, action) {
            //state.isPlaying = true;
            state.src = action.payload;
        },
        pauseAudio(state) {
            state.isPlaying = false;
        },
    },
});

export const { playAudio, pauseAudio } = audioSlice.actions;
export default audioSlice.reducer;
