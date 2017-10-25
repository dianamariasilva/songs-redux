import React, {Component} from 'react';
import { connect } from "redux-zero/react";
import { incrementScore, decrementScore, addPlayer, removePlayer, selectSong } from "./actions";
import './App.css';
import store from "./store";


const Player = ({name, score, decrement, increment, selectSong, removePlayer}) => {
	return (
		<td>{name}</td>
	);
}

const PlayerDetail = ({ selectedSong }) => {
	if(selectedSong){
		return (
			<div>
				<h3>{selectedSong.name}</h3>
			</div>
		)
	}else{
		return (<li className="current">Click on a player to see more details</li>);
	 }
};

const App = ({songs, selectedSongIndex}) => {
	const onSubmit = (e) => {
		e.preventDefault();
	}
	
	const songComponents = (content) => {
		return songs.map (item => <Player
					name={item.name}
					author={item.author}
					duration={item.duration}
				/>
		);
	}

	let selectedSong;
	if(selectedSongIndex !== -1){
		selectedSong = songs[selectedSongIndex];
	}

	return (
		<div>
			<div>
				<h1>Treetunes</h1>

				<ol id="playlist">
				<PlayerDetail selectedSong={selectedSong} />
				</ol>
				<button id="play">Play</button>
				<button id="next">Next</button>
				<button id="stop">Stop</button>
			</div>
		</div>
	);
}

const mapToProps = ({songs, selectedSongIndex}) => ({songs, selectedSongIndex});

export default connect(mapToProps)(App);

