package com.service.genre.GenreMicroService.model;

import java.util.ArrayList;
import java.util.List;

public class Genre {

    private Long id;

    private String name;

    private List<Movie> movieList = new ArrayList<>();

    public Genre() {

    }

    public Genre(Long id, String name, List<Movie> movieList) {
        super();
        this.id = id;
        this.name = name;
        this.movieList = movieList;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Movie> getMovieList() {
        return movieList;
    }

    public void setMovieList(List<Movie> movieList) {
        this.movieList = movieList;
    }
}