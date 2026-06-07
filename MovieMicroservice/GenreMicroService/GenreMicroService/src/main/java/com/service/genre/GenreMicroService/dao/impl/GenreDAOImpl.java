package com.service.genre.GenreMicroService.dao.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.service.genre.GenreMicroService.dao.GenreDAO;
import com.service.genre.GenreMicroService.model.Genre;

@Repository
public class GenreDAOImpl implements GenreDAO {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Override
    public List<Genre> getAllGenres() {

        return jdbcTemplate.query(
                "select * from genre",
                BeanPropertyRowMapper.newInstance(Genre.class));
    }

    @Override
    public Genre getGenreById(Long id) {

        return jdbcTemplate.queryForObject(
                "select * from genre where id=?",
                BeanPropertyRowMapper.newInstance(Genre.class),
                id);
    }
}