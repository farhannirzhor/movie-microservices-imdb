package com.service.movie.MovieMicroservice.service;

import java.util.List;

import com.service.movie.MovieMicroservice.model.Movie;

public interface MovieService {

    List<Movie> getAllMovies();

    List<Movie> getMovieByGenreId(Long genreId);

}