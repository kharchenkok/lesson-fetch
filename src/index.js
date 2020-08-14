import './styles/styles.css';
import "./js/refs";
import itemTemplate from './templates/item.hbs';
import refs from './js/refs'

function fetchArticles() {
      let query = 'bitcoin';
      const apiKey = '6d98310b3edb4395ac3a2f5e92e95b0c';
      const url = `http://newsapi.org/v2/everything?q=${query}&from=2020-07-14&sortBy=publishedAt&apiKey=${apiKey}`;
      const options = {
        headers: {
          Authorization: apiKey,
        },
      };
      return fetch(url, options) //повертає проміс
        .then(res => res.json()) //обробляє отримані дані в джейсон формат
        .then(data => {
          console.log(data);
          itemTemplate(data.articles)
          refs.posts.insertAdjace
        })
      }
    