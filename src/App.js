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
		this.setState({
			movieDetails: movieDetails,
			modalMsg: "Movie added to the profile!"
		});
	};

	setProfileMovies = movie => {
		if (!this.checkIfDuplicateProfileMovie(movie)) {
			const newProfileMovies = [...this.state.profileMovies, movie];
			this.setState({
				profileMovies: newProfileMovies
			}, _ => {
				this.toggleModal();
				this.setMovieDetails({});
			})
		} else {
			this.setState({
				modalMsg: "Movie already present in the profile!"
			})
			this.toggleModal();
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
					toggle={this.toggleModal}
					modalMsg={this.state.modalMsg}
				/>

			</React.Fragment>
		);

		return nav;
	}
}

export default App;
