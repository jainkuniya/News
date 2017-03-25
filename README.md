# News    
React-Native App

Simple news app, which will fetch news from various sources. User can filter sources and sort them by latest, top and popular.

Purpose of this project was to learn React-Native.

News are fetched from [https://newsapi.org/](https://newsapi.org/)

## Screenshots
![home-page](./Screenshot_20170325-210942.jpg?raw=true "home-page")
![sources-list](./Screenshot_20170325-210948.jpg?raw=true "sources-list")



## Libraries used
- [axiox](https://www.npmjs.com/package/axios)

## Contributing
- Clone repo.
- Add a new file (`API.js`) in `src` folder which will contain your API key (get it from [https://newsapi.org/](https://newsapi.org/)).

`export const API_KEY = 'API_KEY';`

- Make PR.

## Roadmap
- [] Learn React-Native (by adding cool features in this simple app).
- [] Implement Firebase where user can save articles.
- [] Save `sortBy` and `source` when user leaves from the app. And fetch news/articles according to the saved source on launching app.
- [] Add a share button.
- [] Currently, browser is opened on clicking article, create WebView in the app itself.
- [] many more (as learing goes on). 
