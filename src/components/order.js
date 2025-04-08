import { mainSection } from "./main-layout";

export const order = () => {

  const content = `
    <div class="order__header">
    <h2 class="order__header-title">Заказ успешно размещен</h2>
    <p class="order__header-price">20&nbsp;000&nbsp;₽</p>
  </div>
  <p class="order__id">№43435</p>
  <div class="order__info">
    <h3 class="order__info-title">Данные доставки</h3>
    <table class="order__info-table product__table">
      <tr class="order__table-row">
        <td class="order__table-item">Получатель</td>
        <td class="order__table-item">Иванов Петр Александрович</td>
      </tr>
      <tr class="order__table-row">
        <td class="order__table-item">Телефон</td>
        <td class="order__table-item">+7 (737) 346 23 00</td>
      </tr>
      <tr class="order__table-row">
        <td class="order__table-item">E-mail</td>
        <td class="order__table-item">Ivanov84@gmail.com</td>
      </tr>
      <tr class="order__table-row">
        <td class="order__table-item">Адрес доставки</td>
        <td class="order__table-item">Москва, ул. Ленина, 21, кв. 33</td>
      </tr>
      <tr class="order__table-row">
        <td class="order__table-item">Способ оплаты</td>
        <td class="order__table-item">Картой при получении</td>
      </tr>
      <tr class="order__table-row">
        <td class="order__table-item">Способ получения</td>
        <td class="order__table-item">Доставка</td>
      </tr>
    </table>
    <a href="#" class="order__link">На главную</a>
  </div>
  `;

  return mainSection(content, 'order', 'order__container');
};


