# Bilet System

A Russian Universities Examinations management web application.

## Motivation

## How it works

Admins manage all the data. Admins can create subjects.

Ordinary users register using their university emails. Every ordinary user can be act as university staff, lecturers and students. Users (university staff) create Klasses and Groups, they can add other users (students) to these groups, and they can shared adminstration of these groups with other users (lecturers). Users (lecturers) create lists, these are lists of questions for subjects. These users (lecturers) create questions for the lists. They (lecturers) can create tickets for their lists. These users (lecturers) create examinations for their lists using the list's tickets. They (lecturers) assign tickets to students and they create a mark (score). Users (students) can be part of groups or klasses. Users (stidents) create notes for subjects, they can see the questions and tickets for lists, they can write answers for questions and view other students answers. They (students) can use all the lists, notes and answers they can find to prepare for examinations, after examinations they can view their marks and lecturer reviews.

## Features

1. Secure, two factor authentication.
2. kd

## System Architecture

### Data models

1. User
2. Subject
3. Notes
4. Klass
5. Group
6. List
7. Question
8. Answer
9. Ticket
10. Examination
11. Mark

### Technologies

1. The main backend (i.e for data management) is implemented using NodeJS, NestJS, Postgres, Rabit MQ and Redis.
2. The Web UI is made using JavaScript/TypeScript and ReactJS.
3. An Artificial intelligence micro service is made using Python and Rabit MQ.
4. API stress testing is done using Python and the Locust library.
