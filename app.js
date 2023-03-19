
const loadData = () => {
  fetch('./product.json')
  .then(res => res.json())
  .then(data => displayData(data))
}

const displayData = cardsData => {
  const cardsContainer = document.getElementById('cards');
  cardsData.forEach( item => {
    const card = document.createElement('div');
    card.classList.add('card', 'm-2');
    const IsInBookmark = checkBookMarked(item.id);
    card.innerHTML = `
    <div class="bookmark-icon">
    <i title="${IsInBookmark ? "Remove Bookmark" : "Add Bookmark"}" onclick = "${IsInBookmark ? `removeFromBookMark('${item.id}')` : `addToBookMark('${item.id}', '${item.name}', '${item.price}')`}" class="${IsInBookmark ? "fa-regular fa-bookmark" : "fa-solid fa-bookmark" }"></i>
  
  </div>
  <div class="product-img-container">
    <img
      class="product-img"
      src="${item?.image}"
      alt=""
    />
  </div>
  <h3>${item.name}</h3>
  <p>${item.description.slice(0, 60)}..</p>
  <div class="priceAndButtons">
    <h2 class="text-primary">$${item.price}</h2>
    <button class="btn btn-primary">Buy Now</button>
  </div>
    `;
    cardsContainer.appendChild(card);
  });
}



const addToBookMark = ( id, name, price) => {
  const dataStoredInLocalStorage = JSON.parse(localStorage.getItem('_ctD'));
  const cartData = [];
  if(dataStoredInLocalStorage){
    const isAdded = dataStoredInLocalStorage.find(data => data.id == id);
    if(isAdded){
      Swal.fire({
        icon: 'error',
        title: 'Sorry Dude.',
        text: 'This item is already bookmarked!',
      })
    }
    else{
      cartData.push(...dataStoredInLocalStorage, {id, name, price});
      localStorage.setItem('_ctD', JSON.stringify(cartData));
    }
  }

  else{
       cartData.push(...cartData, {id, name, price});
       localStorage.setItem('_ctD', JSON.stringify(cartData));
  }

}

const removeFromBookMark = id => {
  const dataStoredInLocalStorage = JSON.parse(localStorage.getItem('_ctD'));
  const itemsWithOutPresent = dataStoredInLocalStorage.filter(data => data.id != id);
  localStorage.setItem('_ctD', JSON.stringify(itemsWithOutPresent));
}

const checkBookMarked = id => {
  const dataStoredInLocalStorage = JSON.parse(localStorage.getItem('_ctD'));
  const isBookMarked = dataStoredInLocalStorage?.find( item => item.id == id);
  if(isBookMarked){
    return true;
  }
  else{
    return false;
  }
}


loadData()

