//Selector
const wallPaper = document.querySelector("#wallPaper");
const boxUrl = document.querySelector("#boxUrl");

//heroSection
const wallpaper = [{ img: "./b-047.jpg" }];

let changBg = () => {
  wallpaper.forEach((el, index) => {
    wallPaper.innerHTML += `<img src="${el.img}" class="position-fixed"/>`;
  });
};
changBg();

//boxUrl
const invetoryBox = [
  { name: "YouTube", url: "youtube.com" },
  { name: "Spotify", url: "spotify.com" },
  { name: "Google", url: "google.com" },
  { name: "GitHub", url: "https://github.com/" },
];

let showBoxUrl = () => {
  invetoryBox.forEach((el, index) => {
    boxUrl.innerHTML += `
      <a class="btn border col-2 p-3 gap-1 rounded-5 position-relative" href="${el.url}" >
        <i class="bi bi-x-circle-fill position-absolute text-danger"></i>
        <button class="icon btn btn-secondary rounded-4">
          <img sur="${el.icon}" />
        </button>
        <span class="text-dark">${el.name}</span>
      </a>
    `;
  });
};
showBoxUrl();
