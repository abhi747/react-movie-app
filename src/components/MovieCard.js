import React from 'react'

export default function MovieCard(props) {
	const { Title, Year, Poster } = props.movieDetails;

	if (!Title)
		return null;

	return (
		<React.Fragment>
			<h5 className="text-center">{Title}</h5>
			<div className="card mx-auto mt-3" style={{ width: "15rem" }}>
				<img className="card-img-top" height="350" src={Poster} alt="Movie poster" />
			</div>
			<div className="card-text text-center my-2">({Year})</div>
		</React.Fragment>
	);
}
