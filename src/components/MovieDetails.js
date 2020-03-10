import React, { Component } from "react";

import MovieCard from "./MovieCard";

export class MovieDetails extends Component {

	setProfileMovies = (movieDetails) => {
		this.props.setProfileMovies(movieDetails);
	}

	render() {

		const { movieDetails } = this.props
		return (
			<React.Fragment>

				<MovieCard movieDetails={movieDetails} />
				<div className="text-center">
					<button
						className="btn btn-primary"
						type="button" onClick={this.setProfileMovies.bind(this, movieDetails)}
						disabled={!movieDetails.Title}
					>Add to profile</button>
				</div>

			</React.Fragment>
		)
	}
}

export default MovieDetails;
