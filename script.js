// let users = [
//   {
//     name: "amisha rathore",
//     pic: "https://images.unsplash.com/photo-1604514628550-37477afdf4e3?q=80&w=327&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     bio: "silent chaos in loud world🤱🧛|not for everyone",
//   },
//   {
//     name: "rohan verma",
//     pic: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=387&auto=format&fit=crop",
//     bio: "learning daily | coffee lover ☕ | code & chill",
//   },
//   {
//     name: "neha sharma",
//     pic: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=387&auto=format&fit=crop",
//     bio: "simplicity is the ultimate sophistication ✨",
//   },
//   {
//     name: "arjun singh",
//     pic: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=387&auto=format&fit=crop",
//     bio: "fitness | focus | freedom 💪",
//   },
//   {
//     name: "priya gupta",
//     pic: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=387&auto=format&fit=crop",
//     bio: "dream big. stay kind 🌸",
//   },
//   {
//     name: "kabir malhotra",
//     pic: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?q=80&w=387&auto=format&fit=crop",
//     bio: "traveller | storyteller 🌍📸",
//   },
//   {
//     name: "simran kaur",
//     pic: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=387&auto=format&fit=crop",
//     bio: "creating my own sunshine ☀️",
//   },

// ];

// function showUsers(arr){
//   arr.forEach(function(user){
//       // Create card container
// const card = document.createElement("div");
// card.className = "card";

// // Create image
// const img = document.createElement("img");
// img.className = "bg-img";
// img.src = user.pic;
// img.alt = "";

// // Create blurred layer
// const blurredLayer = document.createElement("div");
// blurredLayer.style.backgroundImage = `url(${user.pic})`
// blurredLayer.className = "blurred-layer";

// // Create content container
// const content = document.createElement("div");
// content.className = "content";

// // Create heading
// const heading = document.createElement("h3");
// heading.textContent = user.name;

// // Create paragraph
// const paragraph = document.createElement("p");
// paragraph.textContent = user.bio

// // Append elements
// content.appendChild(heading);
// content.appendChild(paragraph);

// card.appendChild(img);
// card.appendChild(blurredLayer);
// card.appendChild(content);

// // Finally append card to body or any container

// document.querySelector(".cards").appendChild(card);
// // OR
// // document.querySelector(".container").appendChild(card);

//   })
// }

// showUsers(users)

// let inp = document.querySelector(".search-input");
// inp.addEventListener("input", function(){
//   let newUsers = users.filter((user) => {
//       return user.name.startsWith(inp.value)
//   });
//   document.querySelector(".cards").innerHTML = "";
//   showUsers(newUsers);
// })



const users = [
  {
    name: "amisha rathore",
    pic: "https://images.unsplash.com/photo-1604514628550-37477afdf4e3?q=80&w=327&auto=format&fit=crop",
    bio: "silent chaos in loud world🤱🧛|not for everyone",
  },
  {
    name: "rohan verma",
    pic: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=387&auto=format&fit=crop",
    bio: "learning daily | coffee lover ☕ | code & chill",
  },
  {
    name: "neha sharma",
    pic: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=387&auto=format&fit=crop",
    bio: "simplicity is the ultimate sophistication ✨",
  },
  {
    name: "arjun singh",
    pic: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=387&auto=format&fit=crop",
    bio: "fitness | focus | freedom 💪",
  },
  {
    name: "priya gupta",
    pic: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=387&auto=format&fit=crop",
    bio: "dream big. stay kind 🌸",
  },
  {
    name: "kabir malhotra",
    pic: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?q=80&w=387&auto=format&fit=crop",
    bio: "traveller | storyteller 🌍📸",
  },
  {
    name: "simran kaur",
    pic: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=387&auto=format&fit=crop",
    bio: "creating my own sunshine ☀️",
  },
];

/* -------- Cached DOM elements -------- */
const cardsContainer = document.querySelector(".cards");
const searchInput = document.querySelector(".search-input");

/* -------- Debounce function -------- */
function debounce(fn, delay = 300) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

/* -------- Create single card -------- */
function createCard(user) {
  const card = document.createElement("div");
  card.className = "card";

  const img = document.createElement("img");
  img.className = "bg-img";
  img.src = user.pic;

  const blur = document.createElement("div");
  blur.className = "blurred-layer";
  blur.style.backgroundImage = `url(${user.pic})`;

  const content = document.createElement("div");
  content.className = "content";

  const h3 = document.createElement("h3");
  h3.textContent = user.name;

  const p = document.createElement("p");
  p.textContent = user.bio;

  content.append(h3, p);
  card.append(img, blur, content);

  return card;
}

/* -------- Render users -------- */
function showUsers(arr) {
  cardsContainer.innerHTML = "";

  const fragment = document.createDocumentFragment();
  arr.forEach(user => fragment.appendChild(createCard(user)));

  cardsContainer.appendChild(fragment);
}

/* -------- Search handler -------- */
function handleSearch() {
  const value = searchInput.value.toLowerCase();

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(value)
  );

  showUsers(filteredUsers);
}

/* -------- Initial render -------- */
showUsers(users);

/* -------- Debounced input -------- */
searchInput.addEventListener(
  "input",
  debounce(handleSearch, 300)
);
