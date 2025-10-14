const input = document.getElementById("fileInput");
const gallery = document.getElementById("gallery");

// ✅ Step 1: load or create an empty image list
let images = JSON.parse(localStorage.getItem("images")) || [];

// ✅ Step 2: show saved images when page loads
images.forEach(showImage);

// ✅ Step 3: handle new uploads
input.onchange = () => {
  const file = input.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = e => {
    const src = e.target.result;
    images.push(src);
    localStorage.setItem("images", JSON.stringify(images));
    showImage(src);
  };
  reader.readAsDataURL(file);
};

// ✅ Step 4: function to display image with remove button
function showImage(src) {
  const div = document.createElement("div");
  div.className = "photo";
  div.innerHTML = `
    <img src="${src}" width="150">
    <button class="remove">X</button>
  `;

  div.querySelector(".remove").onclick = () => {
    div.remove();
    images = images.filter(x => x !== src);
    localStorage.setItem("images", JSON.stringify(images));
  };

  gallery.appendChild(div);
}

// ✅ Step 5: clear all images
function clearAll() {
  gallery.innerHTML = "";
  localStorage.removeItem("images");
  images = [];
}




// const fileInput = document.getElementById("fileInput");
// const gallery = document.getElementById("gallery");

// // Load saved images when the page starts
// window.onload = () => {
//   const savedImages = JSON.parse(localStorage.getItem("photos")) || [];
//   savedImages.forEach(src => addPhoto(src));
// };

// // Add new photos
// fileInput.addEventListener("change", () => {
//   for (let file of fileInput.files) {
//     if (!file.type.startsWith("image/")) continue;

//     const reader = new FileReader();
//     reader.onload = e => {
//       addPhoto(e.target.result);
//       saveToStorage();
//     };
//     reader.readAsDataURL(file);
//   }
// });

// // Function to add photo element
// function addPhoto(src) {
//   const div = document.createElement("div");
//   div.className = "photo";
//   div.innerHTML = `
//     <img src="${src}">
//     <button class="remove-btn">X</button>
//   `;
//   div.querySelector(".remove-btn").onclick = () => {
//     div.remove();
//     saveToStorage();
//   };
//   gallery.appendChild(div);
// }

// // Save all photos to localStorage
// function saveToStorage() {
//   const images = [];
//   document.querySelectorAll(".photo img").forEach(img => {
//     images.push(img.src);
//   });
//   localStorage.setItem("photos", JSON.stringify(images));
// }

// // Clear all photos
// function clearAll() {
//   gallery.innerHTML = "";
//   localStorage.removeItem("photos");
// }



// const fileInput = document.getElementById("fileInput");
// const gallery = document.getElementById("gallery");

// fileInput.addEventListener("change", () => {
//   for (let file of fileInput.files) {
//     if (!file.type.startsWith("image/")) continue;

//     const reader = new FileReader();
//     reader.onload = e => {
//       const div = document.createElement("div");
//       div.className = "photo";
//       div.innerHTML = `
//         <img src="${e.target.result}" alt="${file.name}">
//         <button class="remove-btn">X</button>`;
//       div.querySelector(".remove-btn").onclick = () => div.remove();
//       gallery.appendChild(div);
//     };
//     reader.readAsDataURL(file);
//   }
// });

// function clearAll() {
//   gallery.innerHTML = "";
// }






// THIS SAVE IMAGE AFTER RELOADING
