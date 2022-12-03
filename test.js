function remove(start, end, item) {
  for (i = start; i <= end; i++) {
    item[i].remove();
  }
}
const main = document.querySelector(".main");
const colors = ["red", "green", "blue", "yellow"];
const classes = ["a", "b", "c", "d"];
const button = document.querySelector(".button");
const elements = [];
for (i = 0; i <= 3; i++) {
  elements[i] = document.createElement("div");
  elements[i].style.width = "100px";
  elements[i].style.height = "100px";
  elements[i].style.backgroundColor = colors[i];
}
console.log(elements);
const radios = [];
for (i = 1; i <= 3; i++) {
  radios[i] = document.querySelector(".radio" + i);
}
const items = [];
for (i = 0; i <= 3; i++) {
  items[i] = document.querySelector(".item-" + classes[i]);
}
const images = [];
const imageSrc = [
  "./henken.jpg",
  "./warka.jpg",
  "./leszek.jpg",
  "./zywiec.jpg",
];
const person = [];
const personLink = [
  "./Maklowicz.jpg",
  "./lewandowski.webp",
  "./rock.jpg",
  "./pudzian.jpg",
];
for (i = 0; i <= 3; i++) {
  images[i] = document.createElement("img");
  images[i].src = imageSrc[i];
  person[i] = document.createElement("img");
  person[i].src = personLink[i];
}
images[3].style.width = "200px";
person[3].style.width = "200px";
button.addEventListener("click", () => {
  if (radios[1].checked) {
    main.style.paddingBottom = "0px";
    remove(0, 3, person);
    remove(0, 3, images);
    for (i = 0; i <= 3; i++) {
      items[i].appendChild(elements[i]);
      elements[3].style.width = "200px";
    }
  } else if (radios[2].checked) {
    main.style.paddingBottom = "100px";
    remove(0, 3, images);
    remove(0, 3, elements);
    for (i = 0; i <= 3; i++) {
      items[i].style.backgroundColor = null;
      items[i].appendChild(person[i]);
    }
  } else if (radios[3].checked) {
    main.style.paddingBottom = "100px";
    remove(0, 3, person);
    remove(0, 3, elements);
    for (i = 0; i <= 3; i++) {
      items[i].style.backgroundColor = null;
      items[i].appendChild(images[i]);
    }
  }
});
