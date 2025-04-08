
export const catalog = () => {
  const el = document.createElement('div');
  el.classList.add('catalog');

  const child = `
    <div class="container">
      <ul class="catalog__list">
        <li class="catalog__item">
          <a href="#" class="catalog__link catalog__link-active">Все</a>
        </li>
        <li class="catalog__item">
          <a href="#" class="catalog__link">Лыжи</a>
        </li>
        <li class="catalog__item">
          <a href="#" class="catalog__link">Сноуборды</a>
        </li>
        <li class="catalog__item">
          <a href="#" class="catalog__link">Экипировка</a>
        </li>
        <li class="catalog__item">
          <a href="#" class="catalog__link">Ботинки</a>
        </li>
      </ul>
    </div>
  `;

  el.innerHTML = child;
  return el;
}