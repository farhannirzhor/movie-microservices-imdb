package com.service.genre.GenreMicroService.controller;

import java.util.List;

import com.service.genre.GenreMicroService.model.Movie;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.service.genre.GenreMicroService.model.Genre;
import com.service.genre.GenreMicroService.service.GenreService;
import org.springframework.web.client.RestTemplate;

@RestController
@RequestMapping("/genre")
public class GenreServiceController {

    @Autowired
    private GenreService genreService;

    @Autowired
    private RestTemplate restTemplate;

    @GetMapping("/all")
    public List<Genre> getAllGenres() {

        List<Genre> genreList = genreService.getAllGenres();

        for (Genre genre : genreList) {

            List<Movie> movieList = restTemplate.getForObject(
                    "http://movie-service/movie/genre/" + genre.getId(),
                    List.class);

            genre.setMovieList(movieList);
        }

        return genreList;
    }

    @GetMapping("/{id}")
    public Genre getGenreById(@PathVariable Long id) {

        Genre genre = genreService.getGenreById(id);

        List<Movie> movieList = restTemplate.getForObject(
                "http://movie-service/movie/genre/" + genre.getId(),
                List.class);

        genre.setMovieList(movieList);

        return genre;
    }
}