import React, { Component } from "react";
import { getMovies } from "./../services/fakeMovieService";
class Movies extends Component {
  state = {
    movies: getMovies()
  };

  handleDelete = selectedMovie => {
    const filteredMovies = this.state.movies.filter(
      movie => movie._id !== selectedMovie._id
    );
    this.setState({ movies: filteredMovies });
  };

  render() {
    const { length: count } = this.state.movies;

    if (count === 0) {
      return <p>No movies to show</p>;
    }

    return (
      <div>
        <p>Showing {count} movies from database.</p>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rental</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map(movie => {
              return (
                <tr key={movie._id}>
                  <td>{movie.title}</td>
                  <td>{movie.genre.name}</td>
                  <td>{movie.numberInStock}</td>
                  <td>{movie.dailyRentalRate}</td>
                  <td>
                    <button
                      onClick={() => this.handleDelete(movie)}
                      className="btn-sm btn-danger btn"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Movies;
