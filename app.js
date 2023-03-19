
const loadData = () => {
  fetch('./product.json')
  .then(res => res.json())
  .then(data => console.log(data))
}


loadData()