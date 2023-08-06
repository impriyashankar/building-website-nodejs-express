# Building a website with Express.js and Node.js 

This project was forked from a [Linkedin Learn course](https://github.com/danielkhan/building-website-nodejs-express).

> A simple meet-up page with speaker info and feedback, that is dynamic end-to-end.



## General Information
The project was created as a first step to understanding Express.js. With an understanding of node.js, I was eager to build something on top of it and found this course online. I tried to replicate the app creation that the instructor walks us through. It is a simple app which simulates a meetup website with speaker pages and a feedback page. The site uses dynamic views.



## Features

- Index and sub-pages(list page and individual speaker pages) -> implemented with Express routes and EJS templating engine. 
- Fetch and render speaker info and feedback  -> using async/await
- Persist data between sessions -> using session management middleware
- Feedback form - Handling POST request, using 'body-parser' and other libraries to validate and sanitize user input.
- Update of feedback form without full page refresh - by storing and fetching from JSON files and creating API endpoints and client-side JS.



## Screenshots

<img width="1251" alt="Screenshot 2023-08-06 at 10 32 58 PM" src="https://github.com/impriyashankar/building-website-nodejs-express/assets/20161096/cce23ffa-5615-438c-88bb-52a2a843bf56"><br>

<img width="1208" alt="Screenshot 2023-08-06 at 10 34 27 PM" src="https://github.com/impriyashankar/building-website-nodejs-express/assets/20161096/2640afcb-efef-4e40-bc71-c6708d8224f7"><br>

<img width="1216" alt="Screenshot 2023-08-06 at 10 34 59 PM" src="https://github.com/impriyashankar/building-website-nodejs-express/assets/20161096/ef0e3935-ac66-412d-b8cf-8e9cd6b9c8ec">


### What I learned

This project helped me explore several new concepts like API endpoint creation, and go deeper into routing and templating. 


## Acknowledgements

This project was forked from a [Linkedin Learn course](https://github.com/danielkhan/building-website-nodejs-express).


## Setup

In the project directory, you can run:

### `npm run dev`

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

You may also see any lint errors in the console.


