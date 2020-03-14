import React, { Component } from "react";

import Header from "./components/Header";
import AppModal from "./components/AppModal";


export class App extends Component {
	state = {
		movieDetails: {},
		profileMovies: [],
		modal: false,
		modalMsg: ''
	};

	setMovieDetails = movieDetails => {
		if (movieDetails.Title) {
			this.setState({
				movieDetails
			});
		} else {
			this.setState({
				movieDetails: {},
				modalMsg: 'Movie not found!',
				modal: true
			})
		}
	};

	setProfileMovies = movie => {
		if (!this.checkIfDuplicateProfileMovie(movie)) {
			const newProfileMovies = [...this.state.profileMovies, movie];

			this.setState(prevState => ({
				profileMovies: newProfileMovies,
				modalMsg: `${movie.Title} movie added to your library!`,
				modal: !prevState.modal,
			}))
		} else {
			this.setState(prevState => ({
				modalMsg: `${movie.Title} movie already present in your library!`,
				modal: !prevState.modal
			})
			)
		}
	}

	checkIfDuplicateProfileMovie = (movieToBeChecked) => {
		return this.state.profileMovies.find(movie =>
			movie.imdbID === movieToBeChecked.imdbID
		)
	}

	removeProfileMovies = (movieToBeRemoved) => {
		const newProfileMovies = this.state.profileMovies.filter(movie =>
			movie.imdbID !== movieToBeRemoved.imdbID
		);

		this.setState({
			profileMovies: newProfileMovies
		})
	}

	toggleModal = () => {
		this.setState((prevState) => ({
			modal: !prevState.modal,
		}));
	}

	render() {
		const nav = (
			<React.Fragment>

				<Header
					movieDetails={this.state.movieDetails}
					profileMovies={this.state.profileMovies}
					setMovieDetails={this.setMovieDetails}
					setProfileMovies={this.setProfileMovies}
					removeProfileMovies={this.removeProfileMovies}
				/>

				<AppModal
					isOpen={this.state.modal}
					toggleModal={this.toggleModal}
					modalMsg={this.state.modalMsg}
				/>

			</React.Fragment>
		);

		return nav;
	}
}

export default App;
