let sliderLink1 = [
  "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-02052024-MainBannerDailyChanging-Z1-P5-Nike-Asics-min35extra750.jpg",
  "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-02052024-MainBannerDailyChanging-Z1-P6-Kianahouseoffashion-Gulmoharjaipur-Flat60.jpg",
  "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-02052024-MainBannerDailyChanging-Z1-P3-Vanheusen-Wrangler-Min40+750.jpg",
  "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-02052024-MainBannerDailyChanging-Z1--5090.jpg",
  "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-02052024-MainBannerDailyChanging-Z1-P3-MAYBELLINENEWYORK-IKONICPROFESSIONAL-UPTO60.jpg",
];
let slider1 = 0;
sliderLink1.forEach(function (el, indx) {
  let slideImage = document.querySelector(".slide-img");
  let image = document.createElement("img");
  image.src = el;
  let span = document.createElement("span");
  span.addEventListener("click", function () {
    imageChangeFun(indx, span, slideImage);
  });
  document.querySelector(".slide-indicator").append(span);
  slideImage.append(image);
});
function imageChangeFun(indx, span, slideImage) {
  let pos = indx * -100 + "%";
  slider1 = indx;
  let slideInd = document.querySelector(".slide-indicator").childNodes;
  slideInd.forEach(function (elm) {
    elm.removeAttribute("class");
  });
  span.setAttribute("class", "activeBtn");
  slideImage.style.transform = "translateX(" + pos + ")";
}
setInterval(rightArrowAutoSlide, 3000);
let slidingBTN = document.querySelectorAll(".arrowbtn")[0].children;
slidingBTN[0].addEventListener("click", function () {
  slider1--;
  if (slider1 === -1) {
    slider1 = sliderLink1.length - 1;
  }
  let pos = slider1 * -100 + "%";
  let slideInd = document.querySelector(".slide-indicator").childNodes;
  let slideImage = document.querySelector(".slide-img");
  slideInd.forEach(function (elm) {
    elm.removeAttribute("class");
  });
  slideInd[slider1].setAttribute("class", "activeBtn");
  slideImage.style.transform = "translateX(" + pos + ")";
});
slidingBTN[1].addEventListener("click", function () {
  rightArrowAutoSlide();
});
function rightArrowAutoSlide() {
  slider1++;
  if (slider1 === sliderLink1.length) {
    slider1 = 0;
  }
  let pos = slider1 * -100 + "%";
  let slideInd = document.querySelector(".slide-indicator").childNodes;
  let slideImage = document.querySelector(".slide-img");
  slideInd.forEach(function (elm) {
    elm.removeAttribute("class");
  });
  slideInd[slider1].setAttribute("class", "activeBtn");
  slideImage.style.transform = "translateX(" + pos + ")";
}

let laptopLink = [
  {
    imgUrl:
      "https://img101.urbanic.com/v1/goods-pic/82643e54d8f54d12b02ec8702fcc4416UR_w750_q90.webp",
    nameTitle:
      "Ruffle A-line dress",
    price: 2999.0,
    maxprice: 5000.0,
  },
  {
    imgUrl:
      "https://img101.urbanic.com/v1/goods-pic/f188c88a572c4c6fa68e3e1907e3ee5fUR_w1440_q90.webp",
    nameTitle:
      "Bodycon Dress",
    price: 1500.0,
    maxprice: 2999.0,
  },
  {
    imgUrl:
      "https://img101.urbanic.com/v1/goods-pic/df6c23d4294648639ca5b1f862cd1875UR_w1440_q90.webp",
    nameTitle:
      "Sheer Tank Top",
    price: 1490.0,
    maxprice: 2000.0,
  },
  {
    imgUrl:
      "https://img101.urbanic.com/v1/goods-pic/a6b2bcfaf59043569f2250c84e2c8b59UR_w1440_q90.webp",
    nameTitle:
      "Short Pocket Skirt",
    price: 1490.0,
    maxprice: 3000.0,
  },
  {
    imgUrl:
      "https://img101.urbanic.com/v1/goods-pic/85f3aa2110f0424fbbec85d607701b13UR_w1440_q90.webp",
    nameTitle:
      "Textured crop sports top",
    price: 1200.0,
    maxprice: 3000.0,
  },
  {
    imgUrl:
      "https://img101.urbanic.com/v1/goods-pic/2fd8f611022d4ff8bac9769e296af06fUR_w1440_q90.webp",
    nameTitle:
      "Straight leg jeans",
    price: 1690.0,
    maxprice: 5000.0,
  },
  {
    imgUrl:
      "https://img101.urbanic.com/v1/goods-pic/1b8a537804de458ea122329b897c341cUR_w1440_q90.webp",
    nameTitle:
      "Faux leather trench coat",
    price: 5000.0,
    maxprice: 7000.0,
  },
];
let laptopSlider = 0;
laptopLink.forEach(function (el, indx) {
  let image = document.createElement("img");
  image.src = el.imgUrl;
  let name = document.createElement("p");
  name.setAttribute("class", "name_product");
  name.innerText = el.nameTitle;
  let price = document.createElement("p");
  price.innerText = "Offer Price: ";
  let priceInr = document.createElement("span");
  priceInr.setAttribute("class", "price_tag");
  priceInr.innerText = new Intl.NumberFormat("en-IN", {
    maximumSignificantDigits: 3,
  }).format(el.price);
  price.append(priceInr);
  let maxPrice = document.createElement("p");
  maxPrice.innerText =
    "MRP: ₹" +
    new Intl.NumberFormat("en-IN", {
      maximumSignificantDigits: 3,
    }).format(el.maxprice);
  let saving = document.createElement("p");
  let saveInr = el.maxprice - el.price;
  let savePrcnt = (saveInr / el.maxprice) * 100;
  saving.innerText =
    "You Save: " +
    Math.floor(savePrcnt) +
    "%" +
    "(₹" +
    new Intl.NumberFormat("en-IN", { maximumSignificantDigits: 3 }).format(
      saveInr
    ) +
    ")";
  let offer = document.createElement("p");
  offer.innerText = "offers available";
  let div = document.createElement("div");
  div.append(image, name, price, maxPrice, saving, offer);
  document.querySelector(".slide-product").append(div);
});
slidingBTN = document.querySelectorAll(".arrowbtn")[1].children;
slidingBTN[0].addEventListener("click", function () {
  laptopSlider--;
  if (laptopSlider === -1) {
    laptopSlider = 1;
  }
  let pos = laptopSlider * -36 + "vw";
  let slideDiv = document.querySelector(".slide-product");
  slideDiv.style.transform = "translateX(" + pos + ")";
});
slidingBTN[1].addEventListener("click", function () {
  laptopSlider++;
  if (laptopSlider === 2) {
    laptopSlider = 0;
  }
  let pos = laptopSlider * -36 + "vw";
  let slideDiv = document.querySelector(".slide-product");
  slideDiv.style.transform = "translateX(" + pos + ")";
});


let thirdProSli = 0;
thirdProduct.forEach(function (el) {
  let image = document.createElement("img");
  image.src = el.imgUrl;
  let name = document.createElement("p");
  name.setAttribute("class", "name_product");
  name.innerText = el.nameTitle;
  let price = document.createElement("p");
  price.innerText = "Offer Price: ";
  let priceInr = document.createElement("span");
  priceInr.setAttribute("class", "price_tag");
  priceInr.innerText = new Intl.NumberFormat("en-IN", {
    maximumSignificantDigits: 3,
  }).format(el.price);
  price.append(priceInr);
  let maxPrice = document.createElement("p");
  maxPrice.innerText =
    "MRP: ₹" +
    new Intl.NumberFormat("en-IN", {
      maximumSignificantDigits: 3,
    }).format(el.maxprice);
  let saving = document.createElement("p");
  let saveInr = el.maxprice - el.price;
  let savePrcnt = (saveInr / el.maxprice) * 100;
  saving.innerText =
    "You Save: " +
    Math.floor(savePrcnt) +
    "%" +
    "(₹" +
    new Intl.NumberFormat("en-IN", { maximumSignificantDigits: 3 }).format(
      saveInr
    ) +
    ")";
  let offer = document.createElement("p");
  offer.innerText = "offers available";
  let div = document.createElement("div");
  div.append(image, name, price, maxPrice, saving, offer);
  document.querySelectorAll(".slide-product")[1].append(div);
});
slidingBTN = document.querySelectorAll(".arrowbtn")[2].children;
slidingBTN[0].addEventListener("click", function () {
  thirdProSli--;
  if (thirdProSli === -1) {
    thirdProSli = 3;
  }
  console.log(thirdProSli);
  let pos = thirdProSli * -36 + "vw";
  let slideDiv = document.querySelectorAll(".slide-product")[1];
  slideDiv.style.transform = "translateX(" + pos + ")";
});
slidingBTN[1].addEventListener("click", function () {
  thirdProSli++;
  if (thirdProSli === 4) {
    thirdProSli = 0;
  }
  let pos = thirdProSli * -36 + "vw";
  let slideDiv = document.querySelectorAll(".slide-product")[1];
  slideDiv.style.transform = "translateX(" + pos + ")";
});

setInterval(rightArrowAutoSlide_2, 3000);
slidingBTN = document.querySelectorAll(".arrowbtn")[3].children;
slidingBTN[0].addEventListener("click", function () {
  slider2--;
  if (slider2 === -1) {
    slider2 = sliderLink2.length - 1;
  }
  let pos = slider2 * -100 + "%";
  let slideInd = document.querySelectorAll(".slide-indicator")[1].childNodes;
  let slideImage = document.querySelectorAll(".slide-img")[1];
  slideInd.forEach(function (elm) {
    elm.removeAttribute("class");
  });
  slideInd[slider2].setAttribute("class", "activeBtn");
  slideImage.style.transform = "translateX(" + pos + ")";
});
slidingBTN[1].addEventListener("click", function () {
  rightArrowAutoSlide_2();
});
function rightArrowAutoSlide_2() {
  slider2++;
  if (slider2 === sliderLink2.length) {
    slider2 = 0;
  }
  let pos = slider2 * -100 + "%";
  let slideInd = document.querySelectorAll(".slide-indicator")[1].childNodes;
  let slideImage = document.querySelectorAll(".slide-img")[1];
  slideInd.forEach(function (elm) {
    elm.removeAttribute("class");
  });
  slideInd[slider2].setAttribute("class", "activeBtn");
  slideImage.style.transform = "translateX(" + pos + ")";
}
let fiveProSli = 0;
fiveProduct.forEach(function (el) {
  let image = document.createElement("img");
  image.src = el.imgUrl;
  let name = document.createElement("p");
  name.setAttribute("class", "name_product");
  name.innerText = el.nameTitle;
  let price = document.createElement("p");
  price.innerText = "Offer Price: ";
  let priceInr = document.createElement("span");
  priceInr.setAttribute("class", "price_tag");
  priceInr.innerText = new Intl.NumberFormat("en-IN", {
    maximumSignificantDigits: 3,
  }).format(el.price);
  price.append(priceInr);
  let maxPrice = document.createElement("p");
  maxPrice.innerText =
    "MRP: ₹" +
    new Intl.NumberFormat("en-IN", {
      maximumSignificantDigits: 3,
    }).format(el.maxprice);
  let saving = document.createElement("p");
  let saveInr = el.maxprice - el.price;
  let savePrcnt = (saveInr / el.maxprice) * 100;
  saving.innerText =
    "You Save: " +
    Math.floor(savePrcnt) +
    "%" +
    "(₹" +
    new Intl.NumberFormat("en-IN", { maximumSignificantDigits: 3 }).format(
      saveInr
    ) +
    ")";
  let offer = document.createElement("p");
  offer.innerText = "offers available";
  let div = document.createElement("div");
  div.append(image, name, price, maxPrice, saving, offer);
  document.querySelectorAll(".slide-product")[3].append(div);
});
slidingBTN = document.querySelectorAll(".arrowbtn")[5].children;
slidingBTN[0].addEventListener("click", function () {
  fiveProSli--;
  if (fiveProSli === -1) {
    fiveProSli = 2;
  }
  let pos = fiveProSli * -36 + "vw";
  let slideDiv = document.querySelectorAll(".slide-product")[3];
  slideDiv.style.transform = "translateX(" + pos + ")";
});
slidingBTN[1].addEventListener("click", function () {
  fiveProSli++;
  if (fiveProSli === 3) {
    fiveProSli = 0;
  }
  let pos = fiveProSli * -36 + "vw";
  let slideDiv = document.querySelectorAll(".slide-product")[3];
  slideDiv.style.transform = "translateX(" + pos + ")";
});
