"use strict";

// footer start

import { footer } from "../components/footer.js";
import { navbar } from "../components/navbar.js";

document.getElementById("footer").innerHTML = footer();

document.addEventListener("DOMContentLoaded", () => {
  const selectDrop = document.getElementById("countries");
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      data.forEach((country) => {
        const option = document.createElement("option");
        const link = document.createElement("a");
        link.href = "#";
        link.innerText = country.name.common;
        option.value = country.name.common;
        option.append(link);
        selectDrop.append(option);
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

let i1 = document.getElementById("fl-i-1");
i1.addEventListener("focusin", () => {
  document.querySelector("#fl-i-1 + p").style.display = "block";
  document.querySelector("#fl-i-2 + p").style.display = "none";
});
i1.addEventListener("focusout", () => {
  setTimeout(() => {
    document.querySelector("#fl-i-1 + p").style.display = "none";
  }, 1000);
});
let i2 = document.getElementById("fl-i-2");
i2.addEventListener("focusin", () => {
  document.querySelector("#fl-i-2 + p").style.display = "block";
  document.querySelector("#fl-i-1 + p").style.display = "none";
});
i2.addEventListener("focusout", () => {
  let cb = document.getElementById("fl-i-2-cb");
  let len = i2.value.length;
  if (len === 0 && cb.checked === false) {
    setTimeout(() => {
      document.querySelector("#fl-i-2 + p").style.display = "none";
    }, 2000);
  }
});

// footer end

// ------------------------------------------------------------------------------------------

// navbar start

// part of the navbar 1

document.getElementById("navbar").innerHTML = navbar();

document.getElementById("ec-submit").addEventListener("click", function () {
  let email = document.getElementById("nb-email");
  if (email.value.length === 0) {
    document.getElementById("nb-em-warn").style.display = "block";
  }
});

document.getElementById("nb-pop-close").addEventListener("click", function () {
  document.getElementById("nb-e-content").style.opacity = "0";
  document.getElementById("nb-e-content").style.display = "none";
});
document
  .getElementById("nb-em-hover")
  .addEventListener("mouseover", function () {
    document.getElementById("nb-e-content").style.opacity = "1";
    document.getElementById("nb-e-content").style.display = "block";
  });
document
  .getElementById("nb-em-hover")
  .addEventListener("mouseleave", function () {
    setTimeout(function () {
      document
        .getElementById("nb-e-content")
        .addEventListener("mouseover", function () {
          document.getElementById("nb-e-content").style.display = "block";
        });
      document
        .getElementById("nb-e-content")
        .addEventListener("mouseleave", function () {
          document.getElementById("nb-e-content").style.display = "none";
        });
    }, 1000);

    document.getElementById("nb-e-content").style.display = "none";
  });

// end part of the navbar 1

// part of the navbar 2

document.getElementById("nb-m3-close").addEventListener("click", function () {
  document.getElementById("e-content1").style.opacity = "0";
  document.getElementById("e-content1").style.display = "none";
});

document
  .getElementById("nb-join-hover")
  .addEventListener("mouseover", function () {
    document.getElementById("e-content1").style.opacity = "1";
    document.getElementById("e-content1").style.display = "block";
  });
document
  .getElementById("nb-join-hover")
  .addEventListener("mouseleave", function () {
    setTimeout(function () {
      document
        .getElementById("e-content1")
        .addEventListener("mouseover", function () {
          document.getElementById("e-content1").style.display = "block";
        });
      document
        .getElementById("e-content1")
        .addEventListener("mouseleave", function () {
          document.getElementById("e-content1").style.display = "none";
        });
    }, 1000);
    document.getElementById("e-content1").style.display = "none";
  });

document
  .getElementById("nb-join-email-check")
  .addEventListener("click", function () {
    let email = document.getElementById("nb-join-email");
    if (email.value.length === 0) {
      document.getElementById("nb-join-em-warn").style.display = "block";
    }
  });

// end part of the navbar 2

// part of the navbar 3

document
  .getElementById("nb-register-close")
  .addEventListener("click", function () {
    document.getElementById("nb-register").style.opacity = "0";
    document.getElementById("nb-register").style.display = "none";
  });

document
  .getElementById("nb-register-hover")
  .addEventListener("mouseover", function () {
    document.getElementById("nb-register").style.opacity = "1";
    document.getElementById("nb-register").style.display = "block";
  });

document
  .getElementById("nb-register-hover")
  .addEventListener("mouseleave", function () {
    setTimeout(function () {
      document
        .getElementById("nb-register")
        .addEventListener("mouseover", function () {
          document.getElementById("nb-register").style.display = "block";
        });
      document
        .getElementById("nb-register")
        .addEventListener("mouseleave", function () {
          document.getElementById("nb-register").style.display = "none";
        });
    }, 1000);
    document.getElementById("nb-register").style.display = "none";
  });

// part of the navbar 3

// login changes
document
  .getElementById("nb-new-acc-reg")
  .addEventListener("click", function () {
    document.getElementById("nb-new-reg").style.display = "none";
    document.getElementById("nb-reg").style.display = "none";
    document.getElementById("nb-new-reg1").style.display = "block";
    document.getElementById("nb-reg1").style.display = "block";
  });

document
  .getElementById("nb-new-acc-reg1")
  .addEventListener("click", function () {
    document.getElementById("nb-new-reg").style.display = "block";
    document.getElementById("nb-reg").style.display = "block";
    document.getElementById("nb-new-reg1").style.display = "none";
    document.getElementById("nb-reg1").style.display = "none";
  });
// navbar end
//container starts

let slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides((slideIndex += n));
}
function currentSlide(n) {
  showSlides((slideIndex = n));
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
document.getElementById("dot1").addEventListener("click", () => {
  currentSlide(1);
});
document.getElementById("dot2").addEventListener("click", () => {
  currentSlide(2);
});
document.getElementById("dot3").addEventListener("click", () => {
  currentSlide(3);
});

document.getElementById("prevleft").addEventListener("click", () => {
  plusSlides(-1);
});
document.getElementById("nextright").addEventListener("click", () => {
  plusSlides(1);
});
let datanew = [
  {
    url: "https://www.bobbibrown.in/media/export/cms/products/v2_1080x1080/bb_sku_ERFJ12_1080x1080_0.jpg",
    url2: "https://www.bobbibrown.in/media/export/cms/products/600x600/bb_sku_EER904_600x600_1.jpg",
    name: "SKIN CONCEALER STICK",
    rating: "4",
    price: "1299",
  },
  {
    url: "https://www.bobbibrown.in/media/export/cms/products/600x600/bb_sku_EPYL03_600x600_0.jpg",
    url2: "https://www.bobbibrown.in/media/export/cms/products/600x600/bb_sku_EER904_600x600_1.jpg",

    name: "FACE AND CHEEK PALETTE",
    rating: "4",
    price: "1299",
  },
  {
    url: "https://www.bobbibrown.in/media/export/cms/products/600x600/bb_sku_E96E40_600x600_0.jpg",
    url2: "https://www.bobbibrown.in/media/export/cms/products/600x600/bb_sku_EER904_600x600_1.jpg",

    name: "LONG-WEAR CREAM SHADOW STICK",
    rating: "4",
    price: "1299",
  },
];
let datamini = [
  {
    url: "https://www.bobbibrown.in/media/export/cms/products/600x600/bb_sku_ERLC01_600x600_0.jpg",
    url2: "https://www.bobbibrown.in/media/export/cms/products/600x600/bb_sku_EER904_600x600_1.jpg",

    name: "SKIN CONCEALER STICK",
    rating: "4",
    price: "1299",
  },
  {
    url: "https://www.bobbibrown.in/media/export/cms/products/600x600/bb_sku_EPGN01_600x600_0.jpg",
    url2: "https://www.bobbibrown.in/media/export/cms/products/600x600/bb_sku_EER904_600x600_1.jpg",

    name: "FACE AND CHEEK PALETTE",
    rating: "4",
    price: "1299",
  },
  {
    url: "https://www.bobbibrown.in/media/export/cms/products/v2_1080x1080/bb_sku_EPH201_1080x1080_0.jpg",
    url2: "https://www.bobbibrown.in/media/export/cms/products/600x600/bb_sku_EER904_600x600_1.jpg",

    name: "LONG-WEAR CREAM SHADOW STICK",
    rating: "4",
    price: "1299",
  },
];
let datatara = [
  {
    url: "https://www.bobbibrown.in/media/export/cms/products/600x600/bb_sku_EPH101_600x600_0.jpg",
    url2: "https://www.bobbibrown.in/media/export/cms/products/600x600/bb_sku_EER904_600x600_1.jpg",

    name: "SKIN CONCEALER STICK",
    rating: "4",
    price: "1299",
  },
  {
    url: "https://www.bobbibrown.in/media/export/cms/products/v2_1080x1080/bb_sku_EER904_1080x1080_0.jpg",
    url2: "https://www.bobbibrown.in/media/export/cms/products/600x600/bb_sku_EER904_600x600_1.jpg",

    name: "FACE AND CHEEK PALETTE",
    rating: "4",
    price: "1299",
  },
  {
    url: "https://www.bobbibrown.in/media/export/cms/products/v2_1080x1080/bb_sku_EL1104_1080x1080_0.jpg",
    url2: "https://www.bobbibrown.in/media/export/cms/products/600x600/bb_sku_EER904_600x600_1.jpg",

    name: "LONG-WEAR CREAM SHADOW STICK",
    rating: "4",
    price: "1299",
  },
];
let data2 = [
  {
    url: "https://www.bobbibrown.in/media/export/cms/Live-Chat_500x500.jpg",
    head: "LIVE CHAT",
    desc: "Chat with a makeup artist to get product recommendations.",
    link: "CHAT NOW",
    goto: "",
  },
  {
    url: "https://www.bobbibrown.in/media/export/cms/Samples_500x500.jpg",
    head: "SAMPLE ON EVERY PURCHASE",
    desc: "Select a free sample at checkout with any order*** (Conditions Apply)",
    link: "SHOP NOW",
    goto: "",
  },
  {
    url: "https://www.bobbibrown.in/media/export/cms/Shipping-&-Returns_500x500.jpg",
    head: "FREE SHIPPING",
    desc: "Get your favorites delivered straight to your door - every shipment on us",
    link: "SHOP NOW",
    goto: "",
  },
  {
    url: "https://www.bobbibrown.in/media/export/cms/Virtual-Consults_500x500.jpg",
    head: "VIRTUAL CONSULTATION",
    desc: "Get personalized recommendation on our bestsellers with Virtual Artistry Consultations",
    link: "BOOK NOW",
    goto: "",
  },
];

let new_option = document.getElementById("new_option");
new_option.style.fontWeight = "bold";
let mini_option = document.getElementById("mini_option");
let taras_option = document.getElementById("taras_option");

let newOption = () => {
  appendItems(datanew);
  mini_option.style.fontWeight = "lighter";
  taras_option.style.fontWeight = "lighter";
  new_option.style.fontWeight = "bold";
};
let miniOption = () => {
  appendItems(datamini);
  mini_option.style.fontWeight = "bold";
  taras_option.style.fontWeight = "lighter";
  new_option.style.fontWeight = "lighter";
};
let tarasOption = () => {
  appendItems(datatara);
  mini_option.style.fontWeight = "lighter";
  taras_option.style.fontWeight = "bold";
  new_option.style.fontWeight = "lighter";
};
new_option.addEventListener("click", newOption);
mini_option.addEventListener("click", miniOption);
taras_option.addEventListener("click", tarasOption);

function appendLAst(data) {
  let division = document.getElementById("products_last");
  division.innerHTML = null;
  data.forEach((el) => {
    let box = document.createElement("div");
    let image = document.createElement("img");
    image.src = el.url;
    let caption = document.createElement("p");
    caption.innerText = el.head;
    caption.style.fontWeight = "bold";
    let description = document.createElement("p");
    description.innerText = el.desc;
    let link = document.createElement("p");
    link.innerText = el.link;
    link.className = "downlink";
    box.append(image, caption, description, link);
    division.append(box);
  });
}
appendLAst(data2);

function appendItems(data) {
  let division = document.getElementById("scroll_side");
  division.innerHTML = null;
  data.forEach((el) => {
    let box = document.createElement("div");
    let image = document.createElement("img");
    image.src = el.url;
    image.addEventListener("onmouseover", () => {
      () => {
        image.src = el.url2;
      };
    });
    let name = document.createElement("p");
    name.innerText = el.name;
    name.style.fontWeight = "bold";
    let rating = document.createElement("p");
    rating.innerText = el.rating;
    let price = document.createElement("p");
    price.innerText = el.price;
    let button = document.createElement("button");
    button.innerText = "ADD TO CART";
    box.append(image, name, rating, price, button);
    division.append(box);
  });
}
appendItems(datanew);

// container ends
