// https://dev.to/akshay03/how-to-setup-tailwind-3-on-rails-7-2dbo
// If changes aren't updating, run:
//  npx tailwindcss -i app/assets/stylesheets/application.css -o app/assets/stylesheets/wind.css --watch

module.exports = {
  // include all HTML, JS and ERB files under the app directory.
  content: ["./app/**/*.{html,js,erb}"],
  theme: {
    extend: {},
  },
  plugins: [
      // https://daisyui.com/docs
      require('daisyui')
  ],

  daisyui: {
    themes: [
        'light',
        'dark',
        'synthwave',
        'lofi',
        'halloween',
        'dracula',
        'light',
        'retro',
        'luxury',
    ]
  }
}
