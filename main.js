const pets = [ /* This is the array */
  {
    id: 1,
    name: "Dusty",
    color: "Green",
    specialSkill: "Gives sincere apologies.",
    type: "cat",
    imageUrl: "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg",
  },
  {
    id: 2,
    name: "Trouble",
    color: "Brown",
    specialSkill: "Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
    type: "dino",
    imageUrl: "https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/03/romaine-lettuce-1296x728-body.jpg?w=1155&h=1528",
  },
  {
    id: 3,
    name: "Whiskers",
    color: "Yellow",
    specialSkill: "Can prove he is a real man by drinking whiskey.",
    type: "dino",
    imageUrl: "https://mydinosaurs.com/wp-content/uploads/2017/02/2-3-600x400.jpg"
  },
  {
    id: 4,
    name: "Coco",
    color: "Black",
    specialSkill: "Burps minimally.",
    type: "dog",
    imageUrl: "http://cdn.akc.org/content/article-body-image/funny-pembroke_welsh_corgi.jpg"
  },
  {
    id: 5,
    name: "Spooky",
    color: "Brown",
    specialSkill: "Comfortable in the outdoors for up to eight hours.",
    type: "cat",
    imageUrl: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg"
  },
  {
    id: 6,
    name: "Tiger",
    color: "Black",
    specialSkill: "Can read (but cannot understand) Hebrew.",
    type: "dog",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Basset_Hound_600.jpg"
  },
  {
    id: 7,
    name: "Oreo",
    color: "Yellow",
    specialSkill: "Able to stop chewing ice or whistling on request.",
    type: "cat",
    imageUrl: "https://i.pinimg.com/originals/9d/da/3e/9dda3e5fd2b9886fc3d13ee47f52e8a0.jpg"
  },
  {
    id: 8,
    name: "Ginger",
    color: "Grey",
    specialSkill: "Comfortable in the outdoors for up to eight hours.",
    type: "dino",
    imageUrl: "https://cdn.britannica.com/77/170677-050-F7333D51/lettuce.jpg"
  },
  {
    id: 9,
    name: "Sassy",
    color: "Brown",
    specialSkill: "Adept at talking self and others out of fights.",
    type: "cat",
    imageUrl: "https://tailandfur.com/wp-content/uploads/2015/09/40-Amazing-Cat-Funny-Moment-Pictures-Feature-Image.jpg"
  },
  {
    id: 10,
    name: "Sammy",
    color: "Blue",
    specialSkill: "Listens attentively to boring stories.",
    type: "cat",
    imageUrl: "https://i.pinimg.com/originals/04/54/92/0454926d39eeb420f4f01948e94e9e41.jpg"
  },
  {
    id: 11,
    name: "Coco",
    color: "Orange",
    specialSkill: "Can be around food without staring creepily at it.",
    type: "dino",
    imageUrl: "https://images.squarespace-cdn.com/content/v1/60d5fe5c9e25003cd4b3b2ed/1634316438635-27FNWQSMMPRHWXB0MLGJ/green-cabbage-envato.jpg"
  },
  {
    id: 12,
    name: "Buster",
    color: "Green",
    specialSkill: "Does not use excessive acronyms.",
    type: "dog",
    imageUrl: "https://i.pinimg.com/originals/1f/30/8c/1f308c9c108a384b91b39430cc7312e9.jpg"
  },
  {
    id: 13,
    name: "Chester",
    color: "Red",
    specialSkill: "Expertly quotes and recognizes dialogue from early seasons of The Simpsons.",
    type: "dog",
    imageUrl: "https://content.instructables.com/FCK/PC8L/HCJO5H95/FCKPC8LHCJO5H95.jpg?auto=webp"
  },
  {
    id: 14,
    name: "Samantha",
    color: "Brown",
    specialSkill: "Always up for dessert.",
    type: "cat",
    imageUrl: "http://3.bp.blogspot.com/-RzIFLsIO-XQ/UFoMLOT66JI/AAAAAAAAVps/JRF98hdA9S8/s640/funny-cat-pictures-016-027.jpg"
  },
  {
    id: 15,
    name: "Coco",
    color: "Red",
    specialSkill: "Burps minimally.",
    type: "cat",
    imageUrl: "https://minecraft.wiki/images/Cocoa_Beans_JE4_BE3.png?48f20"
  },
  {
    id: 16,
    name: "Smokey",
    color: "Brown",
    specialSkill: "Drives at a safe rate of speed in snow or rain.",
    type: "dino",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Uncle_Sam_style_Smokey_Bear_Only_You.jpg"
  },
  {
    id: 17,
    name: "Muffin",
    color: "Yellow",
    specialSkill: "Does not freak out if you haven’t seen his favorite movie (The Big Lebowski).",
    type: "cat",
    imageUrl: "https://greedyeats.com/wp-content/uploads/2024/07/Strawberry-muffins-recipe-3-500x500.jpg"
  },
  {
    id: 18,
    name: "Salem",
    color: "Brown",
    specialSkill: "Proficient in air guitar",
    type: "dino",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/Theodora_Mila_Kunis.jpg/220px-Theodora_Mila_Kunis.jpg"
  },
  {
    id: 19,
    name: "Callie",
    color: "Blue",
    specialSkill: "Listens attentively to boring stories.",
    type: "dog",
    imageUrl: "https://swebtoon-phinf.pstatic.net/20240413_52/1712974481134dplPL_JPEG/thumbnail.jpg"
  },
  {
    id: 20,
    name: "Spooky",
    color: "Black",
    specialSkill: "Uses litter box at appropriate hours.",
    type: "cat",
    imageUrl: "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/a3975f14-0c27-4261-9991-ff9c2a9a29f0/width=450/1309738.jpeg"
  },
  {
    id: 21,
    name: "Miss kitty",
    color: "Red",
    specialSkill: "Owns a Nintendo Power Glove.",
    type: "dino",
    imageUrl: "https://us-a.tapas.io/ua/76/8647faf2-b4f5-4c07-9fad-8bebc04d7d6c.jpg"
  },
  {
    id: 22,
    name: "Snuggles",
    color: "Orange",
    specialSkill: "Is comfortable with jokes about his receding hairline.",
    type: "cat",
    imageUrl: "https://barehome.com/cdn/shop/files/DarkBlue_MP_Blanket_Textured_4_b1da15d6-26dd-47c2-8b5d-84f9680d603c.jpg?v=1731345636&width=1080"
  },
  {
    id: 23,
    name: "Buddy",
    color: "Red",
    specialSkill: "Enjoys fine wine.",
    type: "dog",
    imageUrl: "http://1.bp.blogspot.com/-VjM0CmtN-vU/T7YX-LXa09I/AAAAAAAADA0/Vt1oGWEG0lw/s1600/sheepdog+border+collie+shakes+off+water+funny+picture+photo+pulling+faces+raspberry+tongue.jpg"
  },
  {
    id: 24,
    name: "George",
    color: "Brown",
    specialSkill: "Participates in karaoke but does not force others to go out to karaoke.",
    type: "dog",
    imageUrl: "https://sketchok.com/images/articles/01-cartoons/000-va/124/10.jpg"
  },
  {
    id: 25,
    name: "Salem",
    color: "Red",
    specialSkill: "Knows the words to 4 rap songs.",
    type: "cat",
    imageUrl: "https://scholarslab.lib.virginia.edu/assets/img/work/salem-banner.png"
  },
  {
    id: 26,
    name: "Bubba",
    color: "Yellow",
    specialSkill: "Cleans himself.",
    type: "dog",
    imageUrl: "https://www.thetrendywhippet.co.uk/wp-content/uploads/2016/11/IMG_1651-600x400.jpg"
  },
  {
    id: 27,
    name: "Chloe",
    color: "Green",
    specialSkill: "Admits he is wrong",
    type: "dino",
    imageUrl: "https://assets.creationmuseum.org/img/pages/1703-DinoDen-TwoCard.jpg"
  },
  {
    id: 28,
    name: "Nala",
    color: "Purple",
    specialSkill: "Dances when he has to.",
    type: "cat",
    imageUrl: "https://tailandfur.com/wp-content/uploads/2016/03/40-Scary-and-Funny-Cat-Pictures-8.jpg"
  },
  {
    id: 29,
    name: "Oscar",
    color: "Green",
    specialSkill: "Gives hugs with appropriate pressure and for the right length of time.",
    type: "cat",
    imageUrl: "http://img.izismile.com/img/img2/20090219/cats_02.jpg"
  },
  {
    id: 30,
    name: "Lucy",
    color: "Red",
    specialSkill: "Doesn’t get weirded out by the word “moist.”",
    type: "dino",
    imageUrl: "https://pbs.twimg.com/media/FBCZxP7VgAkuhfT.jpg"
  }
];
  const toDom = (divId, toRender) => { /* This is the setup for the toDom function */
    const selDiv = document.querySelector(divId)
    selDiv.innerHTML = toRender
  }
const petsDom = (pets) => { /* This is the setup for the cards on display (i.e. array) */
  let domString = ""
  for (const pet of pets) {
    domString += `<div class="card" style="width: 18rem;">
    <div class="card-body m-0 p-0">
      <h5 class="card-title m-0 p-1">${pet.name}</h5>
      <img src=${pet.imageUrl} class="card-img-top p-4" alt=${pet.name}>
      <div class="text-container">
      <p class="card-text1 m-0 p-1">${pet.color}</p>
      <p class="card-text m-0 p-1">${pet.specialSkill}</p>
      <p class="card-text2 m-0 p-1">${pet.type}</p>
      <button class="btn btn-danger" id="delete--${pet.id}">Delete</button>
      </div>
    </div>
  </div>
`}
  toDom("#app", domString) /* uses toDom function */
  }
const filter = (pets, typeString) => { /* setup for the different buttons */
  const typeArray = []
  for (const pet of pets) {
    if (pet.type === typeString) {
      typeArray.push(pet)
    }
  }
  return typeArray
}
const allCatButton = document.querySelector("#cat") /* BUTTONS. */
const allDogButton = document.querySelector("#dog")
const allDinoButton = document.querySelector("#dino")
const allTypesButton = document.querySelector("#all")
allCatButton.addEventListener("click", () => {
  const catTypes = filter(pets, "cat")
  petsDom(catTypes)
})
allDogButton.addEventListener("click", () => {
  const dogTypes = filter(pets, "dog")
  petsDom(dogTypes)
})
allDinoButton.addEventListener("click" , () => {
  const dinoTypes = filter(pets, "dino")
  petsDom(dinoTypes)
})
allTypesButton.addEventListener("click", () => {
  petsDom(pets)
})

const form = document.querySelector("form");

const createPet = (e) => {
  e.preventDefault();

const newPetObj = { /* setup for creation of pet */
  id: pets.length + 1,
  name: document.querySelector("#name").value,
  color: document.querySelector("#color").value,
  specialSkill: document.querySelector("#specialSkill").value,
  type: document.querySelector("#type").value,
  imageUrl: document.querySelector("#imageUrl").value,
}
pets.push(newPetObj);
petsDom(pets);
form.reset();
}

form.addEventListener('submit', createPet);

app.addEventListener('click', (e) => { /* delete button */
  if (e.target.id.includes("delete")) {
    const [, id] = e.target.id.split("--");
    const index = pets.findIndex(e => e.id === Number(id));
    pets.splice(index, 1);
    petsDom(pets);
  }
});

const startApp = () => {
  petsDom(pets);
}


startApp();