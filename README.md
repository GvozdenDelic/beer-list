# Beer List

This is a React.js practice project.
It lists 24 beers using a mock JSON server

Features:

- User login/logout via useReducer. Redux could be implemented instead, but I didn't think it is needed for this simple logic.
- Adding a beer to favorite list on the listing page and displaying favorites count in the header if user is logged in
- Simple validation that checks if the user has entered at least 3 characters
- Pagination using React pagination hook
- Beer detail page using React Router
- Breadcrumbs on beer detail page
- GvozdenSlider - custom slider with infinite loop option
- Loader (best seen when throttling is enabled in dev tools)
- 404 page

Ideas for new features:

- Localisation
- New slider options
-

Running instructions:

- open terminal and run "npm i"
- Then run "npm i -g json-server". If it requires a special permission, run "sudo npm i -g json-server" and enter the system password.
- Then start the mock server by running: "json-server --watch data.json --port 8000".
- Then run "npm run build"
- then run "npm run preview" and open the URL that is shown in the terminal (eg. http://localhost:4173/)
