const mix = require("laravel-mix");

mix
  .sass("./app/presets/sass/app.scss", "./public/styles/app.css")
  .disableNotifications();
