document.addEventListener("DOMContentLoaded", function() {

  const params = new URLSearchParams(window.location.search);
  const productId = params.get('id');
  
  if (productId === '1') {
    showProduct1();
  } else if (productId === '2') {
    showProduct2();
  } else {
    document.getElementById('product-info').innerHTML = "<p>Товар не найден</p>";
  }
});

function showProduct1() {
  document.getElementById('product-info').innerHTML = `
    <img src="https://sun9-77.userapi.com/impg/Xrr7-bDoZYARs5oueFDnap6Kn18x4TZYZvvucA/Q-JtvSjHBZ4.jpg?size=604x417&quality=96&sign=14e786fd7a40f67481fb44829182c232&c_uniq_tag=l8DPrGqSRKc1PFTXbGc5JYbppomzALwqDFsJGqs29-w&type=album" alt="Product 1">
    <h2>Чай от Карыча</h2>
    <p>Что можно делать весной после зимней спячки? Конечно же, сразу приступать к огороду. Пахать, удобрять, сажать, сеять. Но Смешарики думают иначе: они питаются только солнцем и индийским чаем…</p>
    <p>$10.00</p>
    <button onclick="addToCart()">Добавить в корзину</button>
  `;
}

function showProduct2() {
  document.getElementById('product-info').innerHTML = `
    <img src="https://static.wikia.nocookie.net/smesharikiarhives/images/5/55/%D0%91%D0%BB%D0%B8%D0%BD%D1%8B_%D0%BF%D0%B5%D0%BA%D1%83%D1%82%D1%81%D1%8F.png/revision/latest?cb=20190131115104&path-prefix=ru" alt="Product 2">
    <h2>Каша от Совуньи</h2>
    <p>Если к вам вдруг в пост нагрянули гости без предупреждения. А у вас пустой холодильник  и нечем кормить гостей. Этот быстрый рецепт от совы вас выручит.</p>
    <p>$20.00</p>
    <button onclick="addToCart()">Добавить в корзину</button>
  `;
}

function addToCart() {
  alert('Товар успешно добавлен в корзину!');
}
