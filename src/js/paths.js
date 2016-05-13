/*global  define*/

define(function () {

    var config = {
        paths: {

            //'fx-DataEditor/start' : './start',
            //"fx-DataEditor/config": "../config",


            "fx-DataMngCommons/js": "../js",

            pnotify: '{FENIX_CDN}/js/pnotify/2.0.1/pnotify.custom.min',



            /*,
            "fx-DataEditor/html": "../html",
            "fx-DataEditor/multiLang": "../multiLang",
            "bootstrap": "https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min",
            'jquery': '{FENIX_CDN}/js/jquery/2.1.1/jquery.min'*/
        },
        shim: {
            /*"bootstrap": {
                deps: ["jquery"]
            }*/
        }
    };

    return config;
});