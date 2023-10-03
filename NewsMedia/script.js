let hamburger = document.querySelector("#hamburger");
let moreMenu = document.querySelector(".more");
let dropDownMenu = document.querySelector(".drop-down-menus");
let navBar = document.querySelector("#nav-bar");
let menusContainer = document.querySelector("#menus-container");

let navTags = document.querySelectorAll("#menus-container ul li a");
let main = document.querySelector("main");

let searchInput = document.querySelector(".search input");
let search = document.querySelector(".search-icon i");
let newsTags = document.querySelectorAll("#news-tags>ul>li a");
console.log(newsTags);
let allTags = document.querySelector("*");

searchInput.addEventListener("keydown", (event) => {
  if (event.keyCode == 13 && searchInput.value.trim() != "") {
    fetchNews(searchInput.value);
    searchInput.value = "";
  }
});

search.addEventListener("click", () => {
  if (searchInput.value.trim() != "") {
    fetchNews(searchInput.value);
    searchInput.value = "";
  }
});

function searchByLink(link) {
  for (let i of link) {
    i.addEventListener("click", () => {
      if (i.textContent !== "More" && navBar.classList.contains("active")) {
        navBar.classList.remove("active");
        document.querySelector("body").style.overflowX = "hidden";
      }
      fetchNews(i.textContent);
    })
  }
}
searchByLink(navTags);
searchByLink(newsTags);

async function render(domLeng) {
  for (let i = 0; i < domLeng; i++) {
    let newsContainer = document.createElement("section");
    newsContainer.classList.add("news-container");
    newsContainer.innerHTML = `<div class="news main-news main-first">
      <h1 class="news-heading"><a href="">Lorem ipsum dolor sit.</a></h1>
      <div class="news-image-container">
        <img src="https://media.spokesman.com/photos/2019/07/23/Copa_America_Argentina_Qatar.JPG.jpg" alt="">
      </div>
      <div class="news">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia temporibus porro soluta reprehenderit quo minima sapiente commodi possimus dolore. Cum eius blanditiis deleniti ea aliquam, enim quis minus omnis unde, ipsam nulla animi.</p>
      </div>
    </div>
    <div class="news main-news main-second">
      <h1 class="news-heading"><a href="">Lorem ipsum dolor sit.</a></h1>
      <div class="news-image-container">
        <img src="https://media.spokesman.com/photos/2019/07/23/Copa_America_Argentina_Qatar.JPG.jpg" alt="">
      </div>
      <div class="news">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia temporibus porro soluta reprehenderit quo minima sapiente commodi possimus dolore. Cum eius blanditiis deleniti ea aliquam, enim quis minus omnis unde, ipsam nulla animi.</p>
      </div>
    </div>
    <div class="news right-side-news right-first" >
      <h1 class="news-heading"><a href="">Lorem ipsum dolor sit.</a></h1>
      <div class="news-image-container">
        <img src="https://media.spokesman.com/photos/2019/07/23/Copa_America_Argentina_Qatar.JPG.jpg" alt="">
      </div>
      <div class="news">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia temporibus porro soluta reprehenderit quo minima sapiente commodi possimus dolore. Cum eius blanditiis deleniti ea aliquam, enim quis minus omnis unde, ipsam nulla animi.</p>
      </div>
    </div>
    <div class="news right-side-news right-second" >
      <h1 class="news-heading"><a href="">Lorem ipsum dolor sit.</a></h1>
      <div class="news-image-container">
        <img src="https://media.spokesman.com/photos/2019/07/23/Copa_America_Argentina_Qatar.JPG.jpg" alt="">
      </div>
      <div class="news">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia temporibus porro soluta reprehenderit quo minima sapiente commodi possimus dolore. Cum eius blanditiis deleniti ea aliquam, enim quis minus omnis unde, ipsam nulla animi.</p>
      </div>
    </div>
    <div class="news left-side-news left-first">
      <h1 class="news-heading"><a href="">Lorem ipsum dolor sit.</a></h1>
      <div class="news-image-container">
        <img src="https://media.spokesman.com/photos/2019/07/23/Copa_America_Argentina_Qatar.JPG.jpg" alt="">
      </div>
      <div class="news">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia temporibus porro soluta reprehenderit quo minima sapiente commodi possimus dolore. Cum eius blanditiis deleniti ea aliquam, enim quis minus omnis unde, ipsam nulla animi.</p>
      </div>
    </div>
    <div class="news left-side-news left-second">
      <h1 class="news-heading"><a href="">Lorem ipsum dolor sit.</a></h1>
      <div class="news-image-container">
        <img src="https://media.spokesman.com/photos/2019/07/23/Copa_America_Argentina_Qatar.JPG.jpg" alt="">
      </div>
      <div class="news">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia temporibus porro soluta reprehenderit quo minima sapiente commodi possimus dolore. Cum eius blanditiis deleniti ea aliquam, enim quis minus omnis unde, ipsam nulla animi.</p>
      </div>
    </div>
    <div class="news bottom-side-news bottom-first">
      <h1 class="news-heading"><a href="">Lorem ipsum dolor sit.</a></h1>
      <div class="news-image-container">
        <img src="https://media.spokesman.com/photos/2019/07/23/Copa_America_Argentina_Qatar.JPG.jpg" alt="">
      </div>
      <div class="news">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia temporibus porro soluta reprehenderit quo minima sapiente commodi possimus dolore. Cum eius blanditiis deleniti ea aliquam, enim quis minus omnis unde, ipsam nulla animi.</p>
      </div>
    </div>
    <div class="news bottom-side-news bottom-second">
      <h1 class="news-heading"><a href="">Lorem ipsum dolor sit.</a></h1>
      <div class="news-image-container">
        <img src="https://media.spokesman.com/photos/2019/07/23/Copa_America_Argentina_Qatar.JPG.jpg" alt="">
      </div>
      <div class="news">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia temporibus porro soluta reprehenderit quo minima sapiente commodi possimus dolore. Cum eius blanditiis deleniti ea aliquam, enim quis minus omnis unde, ipsam nulla animi.</p>
      </div>
    </div>`;
    main.appendChild(newsContainer);
  }
}

render();

const apiKey = "44f9a9e6e2bc4634a62d8fd3dcd349d6";

moreMenu.addEventListener("click", () => {
  let deviceWidth = window.innerWidth;
  if (window.innerWidth <= 900)
    moreMenu.classList.toggle("drop-down-active");
});
hamburger.addEventListener("click", () => {
  navBar.classList.toggle("active");
});

//fetching news from the api.
async function fetchNews(newsType) {
  try {
    const data = await fetch(`https://newsapi.org/v2/everything?q=${newsType}&apiKey=${apiKey}`);
    const responsedDatas = await data.json();
    render(responsedDatas["articles"].length / 10);
    renderNews(responsedDatas["articles"])
  }
  catch (error) {
    console.log(error);
  }
}

function renderNews(articles) {
  let linkTag = document.querySelectorAll(".news-container .news-heading a");
  let imageTag = document.querySelectorAll(".news-container .news-image-container img");
  let newsTag = document.querySelectorAll(".news p");
  let i = 0;
  for (let i = 0; i < linkTag.length; i++) {
    linkTag[i].setAttribute("href", articles[i]["url"]);
    linkTag[i].textContent = articles[i]["title"];
    imageTag[i].setAttribute("src", articles[i]["urlToImage"]);
    newsTag[i].textContent = articles[i]["description"];
  }
}

fetchNews("random");