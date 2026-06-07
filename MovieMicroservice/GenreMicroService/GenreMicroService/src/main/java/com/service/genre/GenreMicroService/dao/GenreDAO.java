package com.service.genre.GenreMicroService.dao;

import java.util.List;

import com.service.genre.GenreMicroService.model.Genre;

public interface GenreDAO {

    List<Genre> getAllGenres();

    Genre getGenreById(Long id);

}