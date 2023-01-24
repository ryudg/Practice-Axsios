const form = document.querySelector("#searchFrom");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  removeImg();
  const searchValue = form.elements.query.value;
  const config = { params: { q: searchValue } };
  const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
  makeImg(res.data);
  console.log(res.data);
  form.elements.query.value = "";
});

const makeImg = (shows) => {
  for (let result of shows) {
    if (result.show.image) {
      const img = document.createElement("img");
      img.src = result.show.image.medium;
      document.body.append(img);
    }
  }
};

const removeImg = () => {
  const imgBox = document.querySelectorAll("img");
  for (let img of imgBox) {
    img.remove();
  }
};
