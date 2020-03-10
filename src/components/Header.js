import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import MovieSearch from "./MovieSearch";
import MoviesProfile from "./MoviesProfile";
import MovieDetails from "./MovieDetails";

export default function Header(props) {
	const { setMovieDetails, movieDetails, setProfileMovies, profileMovies, removeProfileMovies, toggle } = props;

	return (
		<Router>
			<nav className="navbar navbar-expand navbar-dark bg-dark">
				<Link className="navbar-brand" to="/">
					Movie DB
          </Link>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item">
							<Link className="nav-link" to="profile">
								My Profile
                </Link>
						</li>
					</ul>
				</div>
			</nav>

			<Switch>
				<Route
					exact
					path="/"
					render={() => (
						<React.Fragment>
							<MovieSearch setMovieDetails={setMovieDetails} toggle={toggle} />
							<MovieDetails movieDetails={movieDetails} setProfileMovies={setProfileMovies} />
						</React.Fragment>
					)}
				/>
				<Route path="/profile">
					<MoviesProfile profileMovies={profileMovies} removeProfileMovies={removeProfileMovies} />
				</Route>
			</Switch>

		</Router>
	)
}
