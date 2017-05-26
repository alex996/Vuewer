<!DOCTYPE html>
<html lang="{{ config('app.locale') }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body>
    <div id="app">
        <header>
            <nav class="nav has-shadow">
                <div class="container">
                    <div class="nav-left">
                        <a href="{{ url('/') }}" class="nav-item">
                            {{ config('app.name', 'Laravel') }}
                        </a>
                    </div>
                    <span class="nav-toggle">
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                    <div class="nav-right nav-menu">
                        <a href="{{ route('login') }}" class="nav-item is-tab">
                            Login
                        </a>
                        <a href="{{ route('register') }}" class="nav-item is-tab">
                            Register
                        </a>
                    </div>
                </div>
            </nav>
        </header>

        <main>
            @yield('content')
        </main>
    </div>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}"></script>
</body>
</html>
