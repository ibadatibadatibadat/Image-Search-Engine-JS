//
let keyword = "";
let page = 1;
const access_key = "G__fTPbYnJ9Z0i5KntumCwzF1Kvb3Mz0YecK43YGUvM";
const search_form = document.getElementById("search-form");
const search_box = document.getElementById("search-box");
const search_result = document.getElementById("search-result");
const show_more_btn = document.getElementById("show-more-btn");

let search_images = async () => {
  keyword = search_box.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${access_key}&per_page=12`;
  const response = await fetch(url);
  const data = await response.json();

  if (page === 1) {
    search_result.innerHTML = "";
  }
  const results = data.results;

  results.map((result) => {
    const image = document.createElement("img");
    image.src = result.urls.small;
    const image_link = document.createElement("a");
    image_link.href = result.links.html;
    image_link.target = "_blank";

    image_link.appendChild(image);
    search_result.appendChild(image_link);
  });
  show_more_btn.style.display = "block";
};
search_form.addEventListener("submit", (e) => {
  e.preventDefault();
  page = 1;
  search_images();
});
show_more_btn.addEventListener("click", () => {
  page++;
  search_images();
});
