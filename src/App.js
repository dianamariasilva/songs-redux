import React, {Component} from 'react';
import { connect } from "redux-zero/react";
import { incrementScore, decrementScore, addPlayer, removePlayer, selectPlayer } from "./actions";
import './App.css';


const Player = ({name, score, decrement, increment, selectPlayer, removePlayer}) => {
	return (
		<div>Hola</div>
		// <div className="player">
		// 	<div className="player-name" onClick={selectPlayer}>
		// 		<a className="remove-player"
		// 		   onClick={removePlayer}>
		// 			✖
		// 		</a>
		// 		{name}
		// 	</div>
		// 	<div className="player-score">
		// 		<div className="counter">
		// 			<button className="counter-action decrement" onClick={decrement}>-</button>
		// 			<div className="counter-score"> {score} </div>
		// 			<button className="counter-action increment" onClick={increment}>+</button>
		// 		</div>
		// 	</div>
		// 	<div>
		// </div>
	);
}

function Stats(props) {
	var totalsongs = props.songs.length;
	var totalPoints = props.songs.reduce(function (total, player) {
		return total + player.score;
	}, 0);

	return (
		<table className="stats">
			<tbody>
			<tr>
				<td>songs:</td>
				<td>{totalsongs}</td>
			</tr>
			<tr>
				<td>Total Points:</td>
				<td>{totalPoints}</td>
			</tr>
			</tbody>
		</table>
	)
}

const PlayerDetail = ({ selectedSong }) => {
	if(selectedSong){
		return (
			<div>
				<h3>{selectedSong.name}</h3>
				<ul>
					<li>
						<span>Score: </span>
						{selectedSong.score}
					</li>
					<li>
						<span>Created: </span>
						{selectedSong.created}
					</li>
					<li>
						<span>Updated: </span>
						{selectedSong.updated}
					</li>
				</ul>
			</div>
		);
	}
	else {
		return (<p>Click on a player to see more details</p>);
	}
};

const App = ({songs, selectedSongIndex}) => {
	const onSubmit = (e) => {
		e.preventDefault();
		console.log ( 'this..', this);//con truco, es el connect el this.
		addPlayer(this.playerInputRef.value)
	}
	const playerComponents =  songs.map ( (player, index) => {
			return <Player
					key = {index}
					name={player.name}
					score={player.score}
					increment={ () => incrementScore(index)}
					decrement={ () => decrementScore(index)}
					removePlayer={ () => removePlayer (index) }
					selectPlayer={ () => selectPlayer (index) }
 				/>
		})

	let selectedSong;
	if(selectedSongIndex !== -1){
		selectedSong = songs[selectedSongIndex];
	}

	return (
		<div className="scoreboard">

			{/* <div className="header">
				<Stats songs={songs}/>
				<h1>SCOREBOARD</h1>
			</div>
			<div className="songs">
				{playerComponents}
			</div>

			<div className="add-player-form">
				<form onSubmit = {onSubmit}>
					<input placeholder="Enter a name" type="text"  ref={(e) => this.playerInputRef = e} />
					<input type="submit" value="Add Player"/>
				</form>
			</div> */}
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

