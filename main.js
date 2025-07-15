//Selector
const wallPaper = document.querySelector("#wallPaper");
const boxUrl = document.querySelector("#boxUrl");
const nameInput = document.querySelector("#recipient-name");
const urlInput = document.querySelector("#message-text");

//storeg (date)
const invetoryBox = JSON.parse(localStorage.getItem("invetoryBox")) || [];
const invetoryWallpaper = JSON.parse(localStorage.getItem("wallPaper")) || [];

//heroSection
const wallpaper = [{ img: "./b-047.jpg" }];

let changBg = () => {
  wallpaper.forEach((el, index) => {
    wallPaper.innerHTML += `<img src="${el.img}" class="wallPaper"/>`;
  });
};
changBg();

//boxUrl

let saveBtn = () => {
  let nameUrl = nameInput.value;
  let linkUrl = urlInput.value;
  let obj = { name: nameUrl, url: linkUrl };
  invetoryBox.push(obj);
  localStorage.setItem("invetoryBox", JSON.stringify(invetoryBox));
  console.log(nameUrl);
  nameInput.value = "";
  urlInput.value = "";
};
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
