# Vuewer

Your perfect time management and goal setting assistant.

## Intro

This is a very minimalistic to-do app that demonstrates the use of Vue.js in Laravel. Our front-end is composed of [single-file components](https://vuejs.org/v2/guide/single-file-components.html) embedded into Blade. Whenever a task is created, updated, or deleted, we notify our back-end with an Ajax call to the API using [Axios](https://github.com/mzabriskie/axios). Among others, the codebase contains examples of parent-child communication, attribute binding, and more...

## Installation

1. You can install the app from the command line: `git clone https://github.com/alex996/Vuewer vuewer`
2. Make sure to create a `.env` file (use `.env.example` as a ref.)
3. Also run `php artisan key:generate` to safeguard against cipher exceptions
4. Once the DB credentials are in place, run `php artisan migrate --seed`
5. (Optional) If you want to play with the code, don't forget `npm install`

## Note

To keep it simple, we only make use of Laravel's built-in request-response system. If you want to scale up your API, you'd have to upgrade it to incorporate more features, such as transformers, pagination, or authentication. For starters, check out [Incremental APIs](https://laracasts.com/series/incremental-api-development) series on Laracasts. If you want to jump right in and start coding, check out the awesome [Dingo API package](https://github.com/dingo/api) which already includes a ton of goodies like [JWT Auth](https://github.com/tymondesigns/jwt-auth) and [Fractal](http://fractal.thephpleague.com/) out of the box.