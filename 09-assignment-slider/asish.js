let image = document.querySelectorAll(".image");
let btn = document.querySelectorAll("button");
let footer = document.getElementsByClassName("footer")[0];

let no_of_image = image.length;
let curr_image_index = 0;

// for (b of btn) b.addEventListener("click", move);

// function move(e) {
//   console.log(e.target.id);
//   //   clearInterval(4500);
//   if (e.target.id === "left") {
//     setInterval(() => {
//       if (curr_image_index > 0) {
//         image[curr_image_index].classList.remove("active");
//         curr_image_index--;
//         image[curr_image_index].classList.add("active");
//       } else {
//         return;
//       }
//       footer.innerHTML =
//         image[curr_image_index].getAttribute("data-iamge-type");
//     }, 4500);
//   }

//   if (e.target.id === "right") {
//     setInterval(() => {
//       if (curr_image_index < no_of_image - 1) {
//         image[curr_image_index].classList.remove("active");
//         console.log(curr_image_index);
//         curr_image_index++;
//         image[curr_image_index].classList.add("active");
//       } else {
//         return;
//       }
//       footer.innerHTML =
//         image[curr_image_index].getAttribute("data-iamge-type");
//     }, 4500);
//   }
// }

window.onload = function () {
  setInterval(() => {
    if (curr_image_index < no_of_image - 1) {
      image[curr_image_index].classList.remove("active");
      curr_image_index++;
      image[curr_image_index].classList.add("active");
    } else {
      return;
    }

    // footer.innerHTML = curr_image_index+1;
    footer.innerHTML = image[curr_image_index].getAttribute("data-iamge-type");
  }, 5000);
};

// let image = document.querySelectorAll(".image");
// let btn = document.querySelectorAll("button");
// let footer = document.getElementsByClassName("footer")[0];

// let no_of_image = image.length;
// let curr_image_index = 0;

// for (b of btn) b.addEventListener("click", move);

// let delayTimeout = null;

// function move(e) {
//   // Clear any previous delay timeout
//   clearTimeout(delayTimeout);

//   if (e.target.id === "left") {
//     // Change image immediately
//     changeImage(false);
//     // Set delay to change to next image
//     delayTimeout = setTimeout(() => {
//       changeImage(true);
//     }, 4500);
//   }

//   if (e.target.id === "right") {
//     // Change image immediately
//     changeImage(true);
//     // Set delay to change to next image
//     delayTimeout = setTimeout(() => {
//       changeImage(true);
//     }, 4500);
//   }
// }

// function changeImage(next) {
//   image[curr_image_index].classList.remove("active");

//   if (next) {
//     if (curr_image_index < no_of_image - 1) {
//       curr_image_index++;
//     } else {
//       curr_image_index = 0;
//     }
//   } else {
//     if (curr_image_index > 0) {
//       curr_image_index--;
//     } else {
//       curr_image_index = no_of_image - 1;
//     }
//   }

//   image[curr_image_index].classList.add("active");
//   footer.innerHTML = image[curr_image_index].getAttribute("data-iamge-type");
// }
