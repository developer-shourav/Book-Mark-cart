
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
    card.innerHTML = `
    <div class="bookmark-icon">
    <i class="fa-solid fa-bookmark"></i>
    <i class="fa-regular fa-bookmark"></i>
  </div>
  <div class="product-img-container">
    <img
      class="product-img"
      src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
      alt=""
    />
  </div>
  <h3>Widget 3000</h3>
  <p>The Widget 3000 is the latest and greatest in widget</p>
  <div class="priceAndButtons">
    <h2 class="text-primary">$580</h2>
    <button class="btn btn-primary">Buy Now</button>
  </div>
    `;
    cardsContainer.appendChild(card);
  });
}

loadData()

