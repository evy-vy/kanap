// déclaration de fonction 

let kanap;

//récupération de produits 

function getAllProducts() {
  return fetch(api('apiUrlProducts'))
    .then(response => {
      return response.json();
    })
    .catch(error => {
      alert(error)
    })
}

async function items() {
  kanaps = await getAllProducts();
  for (kanap of kanaps) {
    displayProducts(kanap);
  }
}

items();

function displayProducts(kanap) {
  // link
  const link = document.createElement('a');
  link.id = 'linkItem';
  link.href = "./product.html?id=42" + kanap._id;

  //container items 
  const container = document.createElement('article');
  container.classList.add('itemArticle');
  //img items 
  const imgItems = document.createElement('img');
  imgItems.src = kanap.imageUrl;
  imgItems.setAttribute('alt', kanap.altTxt);

  //items name
  const itemsName = document.createElement('h3');
  itemsName.classList.add('titleItem');
  itemsName.innerHTML = kanap.name;

  //items paragraph
  const itemsParagraph = document.createElement('p');
  itemsParagraph.classList.add('itemParagraph');
  itemsParagraph.innerText = kanap.description;

  document.getElementById('items').appendChild(link);
  link.appendChild(container);
  container.append(imgItems, itemsName, itemsParagraph);
}