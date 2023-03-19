
const loadData = () => {
  fetch('./product.json')
  .then(res => res.json())
  .then(data => displayData(data))
}

const displayData = cardsData => {
  const cardsContainer = document.getElementById('cards');
  cardsData.forEach( item => {
    console.log(item);
    const card = document.createElement('div');
    card.classList.add('card', 'm-2');
    card.innerHTML = `
    <div class="bookmark-icon">
    <i class="fa-solid fa-bookmark"></i>
    <i class="fa-regular fa-bookmark"></i>
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

loadData()

