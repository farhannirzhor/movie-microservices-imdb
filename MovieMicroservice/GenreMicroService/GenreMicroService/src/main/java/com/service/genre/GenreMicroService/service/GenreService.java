package com.service.genre.GenreMicroService.service;

import java.util.List;

import com.service.genre.GenreMicroService.model.Genre;

public interface GenreService {

    List<Genre> getAllGenres();

    Genre getGenreById(Long id);

}