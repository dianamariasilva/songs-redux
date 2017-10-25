import createStore from "redux-zero";

let SONGS = [
	{
		name: "Here Comes the Sun",
		author: "The Beatles",
		id: 1,
		duration: '2:54'
	},
	{
		name: "Walking on Sunshine",
		author: "Katrina and the Waves",
		id: 2,
		duration: '3:43'
	},
	{
		name: "Sunshine",
		author: "Katrina",
		id: 3,
		duration: '3:43'
	},
];
const initialState = {
	songs: SONGS,
	selectedSongIndex: -1
};

const store = createStore(initialState);

export default store;
