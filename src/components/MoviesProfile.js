import React, { Component } from 'react'
import MovieCard from "./MovieCard";

export class profileMoviesProfile extends Component {

	render() {
		const { profileMovies, removeProfileMovies } = this.props;

		if (!profileMovies.length)
			return (
				<h4 className="mt-5 text-center">No profileMovies in the profile yet!</h4>
			)
		const profilesMovieList = profileMovies.map(movie => {
			return (
				<div className="col-md-3 mb-3 text-center" key={movie.imdbID}>
					<MovieCard movieDetails={movie} />
					<button className="btn btn-danger" onClick={removeProfileMovies.bind(this, movie)}>Remove</button>
				</div>
			)
		})
		return (
			<div className="row mx-0 mt-3">
				{profilesMovieList}
			</div>
		)
	}
}

export default profileMoviesProfile
