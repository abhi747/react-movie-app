import React, { Component } from "react";
import { fetchMovieDetails } from "../config/api";

export class MovieSearch extends Component {
	state = {
		search: "",
		movieDetails: {},
	};

	handleChange = e => {
		this.setState({
			search: e.target.value
		});
	};

	handleSubmit = e => {
		e.preventDefault();

		fetchMovieDetails(
			this.state.search
		).then((response) => {
			return response.json();
		})
			.then((data) => {
				if (data.Response === "False") {
					this.props.setMovieDetails({});
				} else {
					this.props.setMovieDetails(data);
				}
			}).catch(err => {
				this.props.setMovieDetails({});
			});

		this.setState({
			search: ""
		});
	};

	render() {
		return (
			<React.Fragment>
				<form onSubmit={this.handleSubmit}>
					<div className="input-group col-md-5 mt-3 mb-4 mx-auto">
						<input
							type="text"
							className="form-control"
							placeholder="Search Movies"
							value={this.state.search}
							onChange={this.handleChange}
						/>
						<div className="input-group-append">
							<button
								className="btn btn-primary"
								type="submit"
								disabled={!this.state.search}
							>
								Search
              </button>
						</div>
					</div>
				</form>
			</React.Fragment>
		);
	}
}

export default MovieSearch;
