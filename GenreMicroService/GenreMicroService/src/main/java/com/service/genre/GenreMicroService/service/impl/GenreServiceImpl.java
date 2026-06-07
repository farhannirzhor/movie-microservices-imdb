package com.service.genre.GenreMicroService.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.service.genre.GenreMicroService.dao.GenreDAO;
import com.service.genre.GenreMicroService.model.Genre;
import com.service.genre.GenreMicroService.service.GenreService;

@Service
public class GenreServiceImpl implements GenreService {

    @Autowired
    private GenreDAO genreDAO;

    @Override
    public List<Genre> getAllGenres() {

        return genreDAO.getAllGenres();
    }

    @Override
    public Genre getGenreById(Long id) {

        return genreDAO.getGenreById(id);
    }
}