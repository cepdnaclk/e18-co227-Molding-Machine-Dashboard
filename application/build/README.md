# Serve the built React App

## Method 1

First you have to install serve and let it handle the rest:
### `npm install -g serve`
### `serve -s build`

The last command shown above will serve your static site on the port 3000

The serve port can be change using:
### `serve -s build -l 4000`

## Method 2

Serve the project with npx server:
### `npx serve -s build`

This will serve your static site on the port 3000

---

[Learn more](https://create-react-app.dev/docs/deployment/) for more information.
