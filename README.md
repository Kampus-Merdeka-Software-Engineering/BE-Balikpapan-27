[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/yZWC7OmO)

# MomsHealth - Complete Health Care Solution

## Introduction

Welcome to the server-side of [**Moms Health Website**](https://kampus-merdeka-software-engineering.github.io/FE-Balikpapan-27/)! 

## Technologies Use

- `Express JS`: Node JS server-side framework to build web applications and APIs easily and quickly.
- `Prisma`: Modern ORM (Object-Relational Mapping) to simplify interaction with the database.
- `MySQL`: Database for storing and managing data.
- `Railway`:  A platform for deploying and managing databases and backend services easily.

## APIs Endpoints We Provide

`BASE_URL`:
```
https://be-balikpapan-27-production.up.railway.app/
```

### Appointment Routes `/appointment`

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| **GET** | `/appointment` | Get all appointment data |
| **GET** | `/appointment/:id` | Get data appointment data by id |
| **POST** | `/appointment/create` | Create an appointment |
| **PUT** | `/appointment/update:id` | Update appointment by id |
| **DELETE** | `/appointment/delete:id` | Delete appointment by id |

### Blog Routes `/blog`

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| **GET** | `/blog` | Get all blog data |
| **GET** | `/blog/:id` | Get data blog data by id |
| **POST** | `/blog/create` | Create an blog |
| **PUT** | `/blog/update:id` | Update blog by id |
| **DELETE** | `/blog/delete:id` | Delete blog by id |

### Doctor Routes `/doctor`

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| **GET** | `/doctor` | Get all doctor data |
| **GET** | `/doctor/:id` | Get data doctor data by id |
| **POST** | `/doctor/create` | Create an doctor |
| **PUT** | `/doctor/update:id` | Update doctor by id |
| **DELETE** | `/doctor/delete:id` | Delete doctor by id |

### Team Routes `/team`

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| **GET** | `/team` | Get all team data |
| **GET** | `/team/:id` | Get data team data by id |
| **POST** | `/team/create` | Create an team |
| **PUT** | `/team/update:id` | Update team by id |
| **DELETE** | `/team/delete:id` | Delete team by id |

Developed with ❤️ by the BackEnd team - Group 27 - Balikpapan Section
