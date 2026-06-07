package com.service.movie.MovieMicroservice.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.service.movie.MovieMicroservice.model.Movie;
import com.service.movie.MovieMicroservice.service.MovieService;

@RestController
@RequestMapping("/movie")
public class MovieController {

    @Autowired
    private MovieService movieService;

    @GetMapping("/all")
    List<Movie> getAllMovies() {

        return movieService.getAllMovies();
    }

    @GetMapping("/genre/{id}")
    List<Movie> getMovieByGenreId(@PathVariable Long id) {

        return movieService.getMovieByGenreId(id);
    }
}