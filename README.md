# 🎬 Movie Catalog Microservices Platform

A full-stack IMDb-inspired movie catalog application built using **React**, **Spring Boot Microservices**, **MySQL**, **Eureka Service Discovery**, and **API Gateway**. The system demonstrates a real-world microservices architecture where independent services communicate through REST APIs to provide movie and genre information.

## 🚀 Features

* View all movies and genres
* Retrieve movies by genre
* Retrieve genre details along with associated movies
* RESTful communication between microservices
* Service registration and discovery using Eureka
* Centralized routing through API Gateway
* MySQL database integration
* Dockerized deployment support
* React-based user interface

## 🏗️ System Architecture

```text
React Frontend
       │
       ▼
   API Gateway
       │
 ┌─────┴─────┐
 ▼           ▼
Movie      Genre
Service    Service
     │
     ▼
    MySQL
     
Eureka Service Discovery
```

## 🛠️ Tech Stack

### Frontend

* React.js
* JavaScript
* CSS

### Backend

* Java
* Spring Boot
* Spring Data JPA
* Spring Cloud Gateway
* Netflix Eureka
* REST APIs

### Database

* MySQL

### DevOps & Tools

* Docker
* Maven
* Git
* GitHub

## 📂 Microservices

### Movie Service

Responsible for:

* Managing movie information
* Fetching movies by genre
* Providing movie-related REST APIs

### Genre Service

Responsible for:

* Managing genre information
* Communicating with Movie Service
* Returning genres with associated movies

### API Gateway

Responsible for:

* Centralized routing
* Request forwarding
* Single entry point for all client requests

### Eureka Service Discovery

Responsible for:

* Service registration
* Service discovery
* Load-balanced communication between services

## 🔗 API Endpoints

### Movie Service

```http
GET /movie/all
GET /movie/{id}
GET /movie/genre/{genreId}
```

### Genre Service

```http
GET /genre/all
GET /genre/{id}
```

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/your-username/movie-microservices-imdb.git
cd movie-microservices-imdb
```

### Configure Database

Create the following databases:

```sql
CREATE DATABASE movie_microservice;
CREATE DATABASE genre_microservice;
```

Update database credentials inside:

```properties
application.properties
```

### Run Services

Start services in the following order:

1. Eureka Service Discovery
2. Movie Service
3. Genre Service
4. API Gateway
5. React Frontend

## 🐳 Docker Deployment

Build Docker image:

```bash
docker build -t movie-catalog .
```

Run container:

```bash
docker run -p 8010:8010 movie-catalog
```

## 📸 Screenshots

Add screenshots of:

* Home Page
* Movie List
* Genre List
* Eureka Dashboard
* API Gateway Routing

## 🎯 Learning Outcomes

* Microservices Architecture
* Service Discovery with Eureka
* API Gateway Implementation
* Inter-Service Communication
* REST API Development
* Spring Boot Best Practices
* Docker Containerization
* Full-Stack Application Development

## 👨‍💻 Author

Farhan Hassin

Final Year Computer Science & Engineering Student

Passionate about Software Engineering, Data Science, and Cloud-Native Application Development.
