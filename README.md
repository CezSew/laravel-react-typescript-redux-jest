# Laravel React w/ Redux, Typescript and JEST Boilerplate

It is a Laravel boilerplate with React, Redux, Typescript and JEST configured and ready to use. I thought it would be nice of me to publish it, since I couldn't find such a stack on relatively fresh packages versions. Hopefully someone will use it and would save a couple of working hours on configuring a new package.

## About

It is a ready-to-use boilerplate, which consist of a fresh versions of React and Typescript.
I also implemented a JWT auth, with frontend login/logout and protected routes features.

## Clone the repository using git clone https://github.com/CezSew/laravel-react-typescript-redux-jest.git

* Fill out a .env file in the project root using the .env.example file as a template
* Install composer dependencies using composer install
* Run:
- ```php artisan key:generate``` 
- ```php artisan migrate``` 
- ```php artisan passport:install```
- ```php artisan storage:link```
*Install NPM dependencies using npm install
* create a database (remeber to define it in .envrc) and ```run php artisan migrate```
