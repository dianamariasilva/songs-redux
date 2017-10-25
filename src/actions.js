import store from "./store";

export const play = (index) => {
	var currentSong = this.songs[this.nowPlayingIndex];
    currentSong.play();
};

export const stop = () => {
	let currentSong = this.songs[this.nowPlayingIndex];
    currentSong.stop();
}


export const next = (index) => {
	this.stop();
	this.nowPlayingIndex++;
	if(this.nowPlayingIndex === this.songs.length) {
		this.nowPlayingIndex = 0;
	}
	this.play();

}


export const selectSong = (index) => {


	store.setState({
		selectedSongIndex : index
	})
}