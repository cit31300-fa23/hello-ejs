# Hello EJS
A very simple Node.js Express application to introduce EJS views.

## v.1
* `mkdir hello-ejs`
* `cd hello-ejs`
* `mkdir views`
* `touch app.js views/index.ejs .gitignore`
* `npm install express ejs`

### Add code
* Add `node_modules` to .gitignore
* Add code to app.js
* Add code to `views/index.ejs`
* Run application with `node app`

## v.2
Split the EJS template into separate header/footer files
* `touch views/header.ejs views/footer.ejs`
* Cut header out of `index.ejs`; paste into `header.ejs`
* Cut footer out of `index.ejs`; paste into `footer.ejs`
* Add include statements into `index.ejs`: **`<%- include('header.ejs') -%>`**

## v.3
Create a new About page with a new route
* `cp views/index.ejs views/about.ejs`
* Edit `views/about.ejs` - remove loop
* Add route to `app.js`