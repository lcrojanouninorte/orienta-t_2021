<!doctype html>
<html>

<head>
    <meta charset="utf-8">
    <title>Orienta-t</title>

    <base href="/">

    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" type="image/png" href="favicon.png">
    <link rel="icon" type="image/x-icon" href="favicon.ico">
    <link rel="stylesheet" href="styles.f63f6e8432cc0aa914fe.css">
<link rel="stylesheet" href="styles.css"></head>

<body>
    <ngx-app>Cargando...</ngx-app>

    <style>
        @-webkit-keyframes spin {
            0% {
                transform: rotate(360deg)
            }
            100% {
                transform: rotate(0)
            }
        }

        @-moz-keyframes spin {
            0% {
                -moz-transform: rotate(360deg)
            }
            100% {
                -moz-transform: rotate(0)
            }
        }

        @keyframes spin {
            0% {
                transform: rotate(360deg)
            }
            100% {
                transform: rotate(0)
            }
        }

        .spinner {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 1003;
            background: #3553ff21;
            overflow: hidden
        }

        .spinner div:first-child {
            display: block;
            position: relative;
            left: 50%;
            top: 50%;
            width: 150px;
            height: 150px;
            margin: -75px 0 0 -75px;
            border-radius: 50%;
            box-shadow: 0 3px 3px 0 rgb(53, 82, 255);
            transform: translate3d(0, 0, 0);
            animation: spin 1s linear infinite
        }

        .spinner div:first-child:after,
        .spinner div:first-child:before {
            content: '';
            position: absolute;
            border-radius: 50%
        }

        .spinner div:first-child:before {
            top: 5px;
            left: 5px;
            right: 5px;
            bottom: 5px;
            box-shadow: 0 3px 3px 0 rgb(255, 67, 67);
            -webkit-animation: spin 3s linear infinite;
            animation: spin 2s linear infinite
        }

        .spinner div:first-child:after {
            top: 15px;
            left: 15px;
            right: 15px;
            bottom: 15px;
            box-shadow: 0 3px 3px 0 rgb(142, 107, 254);
            animation: spin 1.5s linear infinite
        }

        .spinner div:first-child img {
            width: 50px;
            position: absolute;
            margin: 0 auto;
            bottom: 50px;
            left: 50px;
        }
    </style>
    <div id="nb-global-spinner" class="spinner">
        <div class="blob blob-0">
            <img style="" src="./favicon.png" alt="Logo Onu Mujeres">
        </div>
        <div class="blob blob-1"></div>
        <div class="blob blob-2"></div>
        <div class="blob blob-3"></div>
        <div class="blob blob-4"></div>
        <div class="blob blob-5"></div>
    </div>

<script src="runtime-es2015.js" type="module"></script><script src="runtime-es5.js" nomodule defer></script><script src="polyfills-es5.js" nomodule defer></script><script src="polyfills-es2015.js" type="module"></script><script src="scripts.js" defer></script><script src="vendor-es2015.js" type="module"></script><script src="vendor-es5.js" nomodule defer></script><script src="main-es2015.js" type="module"></script><script src="main-es5.js" nomodule defer></script></body>

</html>
