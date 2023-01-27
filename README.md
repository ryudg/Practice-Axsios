# SearchTVshow 
Search tv show

## [use axsios](https://axios-http.com/kr/docs/intro)
- using cdn
```html
  <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
```

## [use TVMAZE API](https://www.tvmaze.com/api)
> URL : /search/shows?q=:query
>> Example : https://api.tvmaze.com/search/shows?q=girls


 ![화면 캡처 2023-01-27 121830](https://user-images.githubusercontent.com/103430498/215002786-4014ee75-72f1-47ac-8bb7-0b9126257e43.png)


```javascript
...

form.addEventListener("submit", async (e) => {                                      // async 함수
  e.preventDefault();
  removeImg();
  const searchValue = form.elements.query.value;
  const config = { params: { q: searchValue } };
  const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);       // await API에서 data를 받아온 후
  makeImg(res.data);
  console.log(res.data);
  form.elements.query.value = "";
});

...
```
