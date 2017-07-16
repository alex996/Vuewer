![Vuewer](https://user-images.githubusercontent.com/15240969/28244625-3e8cb114-69bd-11e7-8039-f2634e1c94c6.png)

Vuewer is meant to demonstrate basic use of Vue.js in Laravel. It makes use of [single-file components](https://vuejs.org/v2/guide/single-file-components.html) embedded into Blade and communicates with the API using [Axios](https://github.com/mzabriskie/axios). This app will show you examples of parent-child communication, attribute binding, and many more. If you want to go **Vuex**, checkout my [other branch](https://github.com/alex996/Vuewer/tree/vuex).

## Installation

1. Run `git clone https://github.com/alex996/Vuewer vuewer`
2. Also run `php artisan key:generate` to safeguard against cipher exceptions
3. Create a `.env` file and enter your DB credentials
4. Finally, run `php artisan migrate --seed`
5. (Optional) If you want to play with the code, don't forget `npm install`

## Note

To keep it simple, we only make use of Laravel's built-in request-response system. If you want to scale up your API, you'd have to upgrade it to incorporate more features, such as transformers, pagination, or authentication. For starters, check out [Incremental APIs](https://laracasts.com/series/incremental-api-development) series on Laracasts. If you want to jump right in and start coding, check out the awesome [Dingo API package](https://github.com/dingo/api) which already includes a ton of goodies like [JWT Auth](https://github.com/tymondesigns/jwt-auth) and [Fractal](http://fractal.thephpleague.com/) out of the box.
