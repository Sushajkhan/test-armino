<h1 align="center">
🌐 Weather App - Mern
</h1>
<p align="center">
MongoDB, Expressjs, React, Nodejs
</p>

<p align="center">
   <a href="https://github.com/amazingandyyy/mern/blob/master/LICENSE">
      <img src="https://img.shields.io/badge/License-MIT-green.svg" />
   </a>
   <a href="https://circleci.com/gh/amazingandyyy/mern">
      <img src="https://circleci.com/gh/amazingandyyy/mern.svg?style=svg" />
   </a>
</p>

> A weather app using mern stack .

## clone or download

```terminal
$ git clone https://github.com/amazingandyyy/mern.git
$ yarn # or npm i
```

## project structure

```terminal
server/
   package.json
   .env (to create .env, check [prepare your secret session])
client/
   package.json
...
```

# Usage (run fullstack app on your machine)

## Prerequisites

- [Node](https://nodejs.org/en/download/) ^10.0.0
- [npm](https://nodejs.org/en/download/package-manager/)

notice, you need client and server runs concurrently in different terminal session, in order to make them talk to each other

## Client-side usage

```terminal
$ cd client          // go to client folder
$ npm i              // install dependencies
$ npm run dev        // run it locally
```

## Server-side usage

```terminal
$ cd server     // go to server folder
$ npm i         // install pdependencies
$ npm start     // run it locally
```

## Sample Environment File

Create a `.env` file in the `server` folder with the following content:

```env
PORT=
JWTPRIVATEKEY=
MONGO_URL=
```

# Dependencies(tech-stacks)

| Client-side                 | Server-side            |
| --------------------------- | ---------------------- |
| axios: ^1.6.7               | bcrypt: ^5.1.1         |
| lucide-react: ^0.356.0      | cookie-parser: ^1.4.6  |
| lodash: ^4.17.21            | cors: ^2.8.5           |
| react : ^18.2.0             | dotenv: ^16.4.5        |
| react-dom: ^18.2.0          | express: ^4.18.3"      |
| weather-icons-react :^1.2.0 | jsonwebtoken": "^9.0.2 |
| react-router-dom: ^4.2.2    | mongoose: ^8.2.1       |
| sonner: ^1.4.3              |                        |

## Features

- Responsive app UI.
- Login & Signup.
- Find weather details of the current location.
- Search weather deatils of a specific location.
- Weather Details include temperature,weather description,and icon icon representing weather condition.
- Bookmark locations and see the weather details of bookmarked locations.

## Upcoming implementation

- Using Nodemailer and cron scheduler send weather details of saved locations as email for evryday for a certain time.

# Screenshots of this project

![Login](http://i.imgur.com/i0BBTFV.png)

![Homepage](http://i.imgur.com/mn1jUjA.png)

![MobileView](http://i.imgur.com/undefined.png)

## Standard

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

## BUGs or comments

[Create new Issues](https://github.com/sushajkhan/test-armino/issues) (preferred)

Email Me: sushajkhan@gmail.com (welcome, say hi)

### License

[MIT](https://github.com/sushajkhan)
