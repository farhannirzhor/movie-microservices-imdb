package com.service.movie.MovieMicroservice.dao;

import java.util.List;

import com.service.movie.MovieMicroservice.model.Movie;

public interface MovieDAO {

    List<Movie> getAllMovies();

    List<Movie> getMovieByGenreId(Long genreId);

}