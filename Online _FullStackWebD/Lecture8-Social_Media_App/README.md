# Social Media Project

## Database Setup

```shell
$ mysql -u root
```

```mysql
create database socialmediadb;

create user socialuser identified with mysql_native_password by 'socialpass';

grant all privileges on socialmediadb.* to socialuser;

flush privileges;
```

## Project Structure

```shell
src
├── controllers             # Functions to connect routes to db operations
    ├── comments.js
│   ├── post.js
│   └── users.js
├── db                      # db connection and model definations
│   └── model.js
├── public                  # html/css/js files for static part of the site
│   └── index.html
├── routes                  # express middlewares (route wise)
│   ├── posts
│   │   ├── comments.js
│   │   └── index.js
│   └── users
│       └── index.js
└── utils
    └── username.js
```

## Business Layer
