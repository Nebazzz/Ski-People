// import { layout } from "./layout";

// let rendered = false;

// export const productList = (title, data, parent) => {
//   if (rendered) {
//     return '';
//   }

//   let goodsItem = '';

//   data.forEach(({ name, price, img }) => {
//     goodsItem += `
//     <li class="goods__item">
//         <article class="goods__card card">
//           <a href="#" class="card__link">
//             <img src="/img${img}" alt="${name}" class="card__image">
//           </a>
//           <button class="like-button">
//             <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
//               <path d="M8.41301 12.8733C8.18634 12.9533 7.81301 12.9533 7.58634 12.8733C5.65301 12.2133 1.33301 9.45998 1.33301 4.79332C1.33301 2.73332 2.99301 1.06665 5.03967 1.06665C6.25301 1.06665 7.32634 1.65332 7.99967 2.55998C8.67301 1.65332 9.75301 1.06665 10.9597 1.06665C13.0063 1.06665 14.6663 2.73332 14.6663 4.79332C14.6663 9.45998 10.3463 12.2133 8.41301 12.8733Z" fill="white" stroke="#1C1C1C" stroke-linecap="round" stroke-linejoin="round"/>
//             </svg>                    
//           </button>
//           <div class="card__info">
//             <h3 class="card__info-title">${name}</h3>
//             <p class="card__info-price">${price}&nbsp₽</p>
//           </div>
//           <button class="card__button">В корзину</button>
//         </article>
//       </li>`
//   });

//   const el = document.createElement('section');
//   el.classList.add('goods');

//   const child = `
//     <h2 class="goods__title">${title}</h2>
//     <ul class="goods__list">
//       ${goodsItem}
//     </ul>
//   `;

//   el.append(layout(child, 'goods__container'));
//   parent.append(el);


//   rendered = true;

//   const catalogButton = document.querySelector('.catalog');
//   if (catalogButton) {
//     catalogButton.addEventListener('click', (e) => {
//       if (e.target.closest('a')) {
//         e.target.classList.add('.catalog__link-active')
//       }

//       const refreshList = data.filter(item => item.type === e.target.textContent);

//       const list = document.querySelector('.goods__list');
//       list.textContent = '';
//       goodsItem = '';
//       refreshList.forEach(({name, price, img}) => {
//         goodsItem += `
//         <li class="goods__item">
//             <article class="goods__card card">
//               <a href="#" class="card__link">
//                 <img src="/img${img}" alt="${name}" class="card__image">
//               </a>
//               <button class="like-button">
//                 <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M8.41301 12.8733C8.18634 12.9533 7.81301 12.9533 7.58634 12.8733C5.65301 12.2133 1.33301 9.45998 1.33301 4.79332C1.33301 2.73332 2.99301 1.06665 5.03967 1.06665C6.25301 1.06665 7.32634 1.65332 7.99967 2.55998C8.67301 1.65332 9.75301 1.06665 10.9597 1.06665C13.0063 1.06665 14.6663 2.73332 14.6663 4.79332C14.6663 9.45998 10.3463 12.2133 8.41301 12.8733Z" fill="white" stroke="#1C1C1C" stroke-linecap="round" stroke-linejoin="round"/>
//                 </svg>                    
//               </button>
//               <div class="card__info">
//                 <h3 class="card__info-title">${name}</h3>
//                 <p class="card__info-price">${price}&nbsp₽</p>
//               </div>
//               <button class="card__button">В корзину</button>
//             </article>
//           </li>`;
//       });

//       if (e.target.textContent === 'Все') {
//         data.forEach(({ name, price, img }) => {
//           goodsItem += `
//           <li class="goods__item">
//               <article class="goods__card card">
//                 <a href="#" class="card__link">
//                   <img src="/img${img}" alt="${name}" class="card__image">
//                 </a>
//                 <button class="like-button">
//                   <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M8.41301 12.8733C8.18634 12.9533 7.81301 12.9533 7.58634 12.8733C5.65301 12.2133 1.33301 9.45998 1.33301 4.79332C1.33301 2.73332 2.99301 1.06665 5.03967 1.06665C6.25301 1.06665 7.32634 1.65332 7.99967 2.55998C8.67301 1.65332 9.75301 1.06665 10.9597 1.06665C13.0063 1.06665 14.6663 2.73332 14.6663 4.79332C14.6663 9.45998 10.3463 12.2133 8.41301 12.8733Z" fill="white" stroke="#1C1C1C" stroke-linecap="round" stroke-linejoin="round"/>
//                   </svg>                    
//                 </button>
//                 <div class="card__info">
//                   <h3 class="card__info-title">${name}</h3>
//                   <p class="card__info-price">${price}&nbsp₽</p>
//                 </div>
//                 <button class="card__button">В корзину</button>
//               </article>
//             </li>`
//         });
//       }
//       list.innerHTML = goodsItem;
//     });
//   }

//   return el;

// }

import { layout } from "./layout";

const createCard = ({name, price, img}) => `
<li class="goods__item">
  <article class="goods__card card">
    <a href="#" class="card__link">
      <img src="/img${img}" alt="${name}" class="card__image">
    </a>
    <button class="like-button" aria-label="Избранное">
      <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.41301 12.8733C8.18634 12.9533 7.81301 12.9533 7.58634 12.8733C5.65301 12.2133 1.33301 9.45998 1.33301 4.79332C1.33301 2.73332 2.99301 1.06665 5.03967 1.06665C6.25301 1.06665 7.32634 1.65332 7.99967 2.55998C8.67301 1.65332 9.75301 1.06665 10.9597 1.06665C13.0063 1.06665 14.6663 2.73332 14.6663 4.79332C14.6663 9.45998 10.3463 12.2133 8.41301 12.8733Z" fill="white" stroke="#1C1C1C" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>                    
    </button>
    <div class="card__info">
      <h3 class="card__info-title">${name}</h3>
      <p class="card__info-price">${price}&nbsp₽</p>
    </div>
    <button class="card__button">В корзину</button>
  </article>
</li>`;

let rendered = false;

export const productList = (title, data, parent) => {
  if (rendered) return '';
  
  const el = document.createElement('section');
  el.classList.add('goods');
  el.append(layout(`
    <h2 class="goods__title">${title}</h2>
    <ul class="goods__list">${data.map(createCard).join('')}</ul>
  `, 'goods__container'));
  
  parent.append(el);

  document.querySelector('.catalog')?.addEventListener('click', (e) => {
    const clickedLink = e.target.closest('a')
    if (!clickedLink) return;

    document.querySelectorAll('.catalog__link').forEach(link => {
      link.classList.remove('catalog__link-active');
    });
    
    clickedLink.classList.add('catalog__link-active');

    const list = document.querySelector('.goods__list');
    const filtered = e.target.textContent === 'Все' 
      ? data 
      : data.filter(item => item.type === e.target.textContent);
    
    list.innerHTML = filtered.map(createCard).join('');
  });

  rendered = true;
  return el;
};