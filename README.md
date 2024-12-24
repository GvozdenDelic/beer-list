# Beer List

Signing NDA makes it difficult to share previous work highlights. 
That's why I created "Beer List" project - to showcase my React skills and solutions inspired by real projects.

It's a simple app that contains PLP, PDP and 404 error page using React Router and mock data. 
I have developed a custom slider from scratch, with infinite loop and transition timing option. It also has some common E-commerce features like login, pagination, adding products to favourite list.
For pagination I have used a pagination React hook. For login I have used a reducer, but the logic could also be handled using Redux and slices.

I have used a localStorage to remember the favourite list after the refresh or in a new session. In a real-life scenario, I would have stored it in the database such as Supabase or MongoDB.

For styling, I have decided to keep it simple: I used SCSS modules with BEM approach. The app is responsive and has 100/100 performance score on Google Lighthouse.

--

Features:
- User login/logout via useReducer.
- Adding a beer to favorite list on the listing page and displaying favorites count in the header if user is logged in
- Simple validation that checks if the user has entered at least 3 characters
- Pagination using React pagination hook
- Beer detail page using React Router
- Breadcrumbs on beer detail page
- GvozdenSlider - custom slider with infinite loop option
- Loader (best seen when throttling is enabled in dev tools)
- 404 page

Running instructions:

- Open terminal and run "npm i"
- Then run "npm i -g json-server". If it requires a special permission, run "sudo npm i -g json-server" and enter the system password.
- Then start the mock server by running: "json-server --watch data.json --port 8000".
- Then run "npm run build"
- Then run "npm run preview" and open the URL that is shown in the terminal (eg. http://localhost:4173/)

Ideas for new features:

- Localisation
- Sorting beer list by name, id, ph level or other attributes
- New slider options
