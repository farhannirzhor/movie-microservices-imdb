package com.service.movie.MovieMicroservice.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.service.movie.MovieMicroservice.dao.MovieDAO;
import com.service.movie.MovieMicroservice.model.Movie;
import com.service.movie.MovieMicroservice.service.MovieService;

@Service
public class MovieServiceImpl implements MovieService {

    @Autowired
    private MovieDAO movieDAO;

    @Override
    public List<Movie> getAllMovies() {

        return movieDAO.getAllMovies();
    }

    @Override
    public List<Movie> getMovieByGenreId(Long genreId) {

        return movieDAO.getMovieByGenreId(genreId);
    }
}