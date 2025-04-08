export const breadcrumb = () => {
  const el = document.createElement('div');
  el.classList.add('breadcrumb');

  const child = `
  <div class="container">
    <nav class="breadcrumb__navigation">
      <ul class="breadcrumb__list">
        <li class="breadcrumb__item">
          <a href="#" class="breadcrumb__link">Главная</a></li>
        <li class="breadcrumb__item">
          <a href="#" class="breadcrumb__link">Лыжи</a></li>
        <li class="breadcrumb__item">
          <a href="#" class="breadcrumb__link">Горные лыжи</a></li>
      </ul>
    </nav>
  </div>
  `;

  el.innerHTML = child;
  return el;
}