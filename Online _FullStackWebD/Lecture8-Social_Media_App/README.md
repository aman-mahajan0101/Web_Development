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

## Frontend (Client Side Code)

```shell
├── controllers
│   ├── comments.js
│   ├── post.js
│   └── users.js
├── db
│   └── model.js
├── public
│   ├── app
│   │   ├── all-posts.js
│   │   ├── common.css
│   │   ├── common.js
│   │   ├── navbar.js
│   │   └── write-post.js
│   ├── components
│   │   ├── all-posts.html
│   │   ├── footer.html
│   │   ├── navbar.html
│   │   └── write-post.html
│   ├── css
│   │   └── bootstrap.css
│   ├── fonts
│   │   ├── Muli-Italic.woff2
│   │   ├── Muli.woff2
│   │   └── muli.css
│   ├── index.html
│   └── js
│       ├── bootstrap.js
│       ├── jquery-3.4.1.js
│       └── popper.js
├── routes
│   ├── posts
│   │   ├── comments.js
│   │   └── index.js
│   └── users
│       └── index.js
├── server.js
└── utils
    └── username.js
```

## Backend (Server)

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

## Business Logic

### Users

1. **create users :**
   This will create a new user with a randon username

### Posts

1. **create post :**
   This will create a new post, required fields are

   - userame
   - title
   - body

2. **show all posts :**
   List all existing posts, we shoudl have following filtering support

   - filter by username
   - filter by query contained in title(search by title)

3. **Edit post** `TBD`

4. **delete post** `TBD`

### Comments

1. **Show all comments (of a user)**

2. **Show all comments (under a user)**

3. **Add a comments (of a user)**

## API Documentations

### `users`

1. `POST /users`

   Creates a new user with random username and an user id

2. `GET /users/{userId}`

   Get an user with a given user id

3. `GET /users/{username}`

   Get an user with a given username

### `posts`

1. `GET /posts`

   Get all posts by everyone

2. `POST /posts`

   Create a new post.
   Required fields in body

   ```
   userId =>
   title =>
   body =>
   ```
