package com.service.genre.GenreMicroService.model;

public class Movie {

    private Long id;

    private String name;

    private int year;

    private Long genreId;

    public Movie() {

    }

    public Movie(Long id, String name, int year, Long genreId) {
        this.id = id;
        this.name = name;
        this.year = year;
        this.genreId = genreId;
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

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public Long getGenreId() {
        return genreId;
    }

    public void setGenreId(Long genreId) {
        this.genreId = genreId;
    }
}