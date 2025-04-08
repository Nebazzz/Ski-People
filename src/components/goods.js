import { mainSection } from "./main-layout";

export const goods = () => {

  const content = `
    <h1 class="goods__title">Избранное</h1>

    <ul class="goods__list">
      <li class="goods__item">
        <article class="goods__card card">
          <a href="#" class="card__link">
            <img src="/img/ski.png" alt="фото зимней экипировки" class="card__image">
          </a>
          <button class="like-button">
            <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.41301 12.8733C8.18634 12.9533 7.81301 12.9533 7.58634 12.8733C5.65301 12.2133 1.33301 9.45998 1.33301 4.79332C1.33301 2.73332 2.99301 1.06665 5.03967 1.06665C6.25301 1.06665 7.32634 1.65332 7.99967 2.55998C8.67301 1.65332 9.75301 1.06665 10.9597 1.06665C13.0063 1.06665 14.6663 2.73332 14.6663 4.79332C14.6663 9.45998 10.3463 12.2133 8.41301 12.8733Z" fill="white" stroke="#1C1C1C" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>                    
          </button>
          <div class="card__info">
            <h3 class="card__info-title">Горные лыжи</h3>
            <p class="card__info-price">5&nbsp;000&nbsp;₽</p>
          </div>
          <button class="card__button">В корзину</button>
        </article>
      </li>
      <li class="goods__item">
        <article class="goods__card card">
          <a href="#" class="card__link">
            <img src="/img/ski.png" alt="фото зимней экипировки" class="card__image">
          </a>
          <button class="like-button">
            <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.41301 12.8733C8.18634 12.9533 7.81301 12.9533 7.58634 12.8733C5.65301 12.2133 1.33301 9.45998 1.33301 4.79332C1.33301 2.73332 2.99301 1.06665 5.03967 1.06665C6.25301 1.06665 7.32634 1.65332 7.99967 2.55998C8.67301 1.65332 9.75301 1.06665 10.9597 1.06665C13.0063 1.06665 14.6663 2.73332 14.6663 4.79332C14.6663 9.45998 10.3463 12.2133 8.41301 12.8733Z" fill="white" stroke="#1C1C1C" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>                    
          </button>
          <div class="card__info">
            <h3 class="card__info-title">Горные лыжи</h3>
            <p class="card__info-price">5&nbsp;000&nbsp;₽</p>
          </div>
          <button class="card__button">В корзину</button>
        </article>
      </li>
      <li class="goods__item">
        <article class="goods__card card">
          <a href="#" class="card__link">
            <img src="/img/ski.png" alt="фото зимней экипировки" class="card__image">
          </a>
          <button class="like-button">
            <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.41301 12.8733C8.18634 12.9533 7.81301 12.9533 7.58634 12.8733C5.65301 12.2133 1.33301 9.45998 1.33301 4.79332C1.33301 2.73332 2.99301 1.06665 5.03967 1.06665C6.25301 1.06665 7.32634 1.65332 7.99967 2.55998C8.67301 1.65332 9.75301 1.06665 10.9597 1.06665C13.0063 1.06665 14.6663 2.73332 14.6663 4.79332C14.6663 9.45998 10.3463 12.2133 8.41301 12.8733Z" fill="white" stroke="#1C1C1C" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>                    
          </button>
          <div class="card__info">
            <h3 class="card__info-title">Горные лыжи</h3>
            <p class="card__info-price">5&nbsp;000&nbsp;₽</p>
          </div>
          <button class="card__button">В корзину</button>
        </article>
      </li>
      <li class="goods__item">
        <article class="goods__card card">
          <a href="#" class="card__link">
            <img src="/img/ski.png" alt="фото зимней экипировки" class="card__image">
          </a>
          <button class="like-button">
            <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.41301 12.8733C8.18634 12.9533 7.81301 12.9533 7.58634 12.8733C5.65301 12.2133 1.33301 9.45998 1.33301 4.79332C1.33301 2.73332 2.99301 1.06665 5.03967 1.06665C6.25301 1.06665 7.32634 1.65332 7.99967 2.55998C8.67301 1.65332 9.75301 1.06665 10.9597 1.06665C13.0063 1.06665 14.6663 2.73332 14.6663 4.79332C14.6663 9.45998 10.3463 12.2133 8.41301 12.8733Z" fill="white" stroke="#1C1C1C" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>                    
          </button>
          <div class="card__info">
            <h3 class="card__info-title">Горные лыжи</h3>
            <p class="card__info-price">5&nbsp;000&nbsp;₽</p>
          </div>
          <button class="card__button">В корзину</button>
        </article>
      </li>
      <li class="goods__item">
        <article class="goods__card card">
          <a href="#" class="card__link">
            <img src="/img/ski.png" alt="фото зимней экипировки" class="card__image">
          </a>
          <button class="like-button">
            <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.41301 12.8733C8.18634 12.9533 7.81301 12.9533 7.58634 12.8733C5.65301 12.2133 1.33301 9.45998 1.33301 4.79332C1.33301 2.73332 2.99301 1.06665 5.03967 1.06665C6.25301 1.06665 7.32634 1.65332 7.99967 2.55998C8.67301 1.65332 9.75301 1.06665 10.9597 1.06665C13.0063 1.06665 14.6663 2.73332 14.6663 4.79332C14.6663 9.45998 10.3463 12.2133 8.41301 12.8733Z" fill="white" stroke="#1C1C1C" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>                    
          </button>
          <div class="card__info">
            <h3 class="card__info-title">Горные лыжи</h3>
            <p class="card__info-price">5&nbsp;000&nbsp;₽</p>
          </div>
          <button class="card__button">В корзину</button>
        </article>
      </li>
      <li class="goods__item">
        <article class="goods__card card">
          <a href="#" class="card__link">
            <img src="/img/ski.png" alt="фото зимней экипировки" class="card__image">
          </a>
          <button class="like-button">
            <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.41301 12.8733C8.18634 12.9533 7.81301 12.9533 7.58634 12.8733C5.65301 12.2133 1.33301 9.45998 1.33301 4.79332C1.33301 2.73332 2.99301 1.06665 5.03967 1.06665C6.25301 1.06665 7.32634 1.65332 7.99967 2.55998C8.67301 1.65332 9.75301 1.06665 10.9597 1.06665C13.0063 1.06665 14.6663 2.73332 14.6663 4.79332C14.6663 9.45998 10.3463 12.2133 8.41301 12.8733Z" fill="white" stroke="#1C1C1C" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>                    
          </button>
          <div class="card__info">
            <h3 class="card__info-title">Горные лыжи</h3>
            <p class="card__info-price">5&nbsp;000&nbsp;₽</p>
          </div>
          <button class="card__button">В корзину</button>
        </article>
      </li>
      <li class="goods__item">
        <article class="goods__card card">
          <a href="#" class="card__link">
            <img src="/img/ski.png" alt="фото зимней экипировки" class="card__image">
          </a>
          <button class="like-button">
            <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.41301 12.8733C8.18634 12.9533 7.81301 12.9533 7.58634 12.8733C5.65301 12.2133 1.33301 9.45998 1.33301 4.79332C1.33301 2.73332 2.99301 1.06665 5.03967 1.06665C6.25301 1.06665 7.32634 1.65332 7.99967 2.55998C8.67301 1.65332 9.75301 1.06665 10.9597 1.06665C13.0063 1.06665 14.6663 2.73332 14.6663 4.79332C14.6663 9.45998 10.3463 12.2133 8.41301 12.8733Z" fill="white" stroke="#1C1C1C" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>                    
          </button>
          <div class="card__info">
            <h3 class="card__info-title">Горные лыжи</h3>
            <p class="card__info-price">5&nbsp;000&nbsp;₽</p>
          </div>
          <button class="card__button">В корзину</button>
        </article>
      </li>
      <li class="goods__item">
        <article class="goods__card card">
          <a href="#" class="card__link">
            <img src="/img/ski.png" alt="фото зимней экипировки" class="card__image">
          </a>
          <button class="like-button">
            <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.41301 12.8733C8.18634 12.9533 7.81301 12.9533 7.58634 12.8733C5.65301 12.2133 1.33301 9.45998 1.33301 4.79332C1.33301 2.73332 2.99301 1.06665 5.03967 1.06665C6.25301 1.06665 7.32634 1.65332 7.99967 2.55998C8.67301 1.65332 9.75301 1.06665 10.9597 1.06665C13.0063 1.06665 14.6663 2.73332 14.6663 4.79332C14.6663 9.45998 10.3463 12.2133 8.41301 12.8733Z" fill="white" stroke="#1C1C1C" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>                    
          </button>
          <div class="card__info">
            <h3 class="card__info-title">Горные лыжи</h3>
            <p class="card__info-price">5&nbsp;000&nbsp;₽</p>
          </div>
          <button class="card__button">В корзину</button>
        </article>
      </li>
      <li class="goods__item">
        <article class="goods__card card">
          <a href="#" class="card__link">
            <img src="/img/ski.png" alt="фото зимней экипировки" class="card__image">
          </a>
          <button class="like-button">
            <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.41301 12.8733C8.18634 12.9533 7.81301 12.9533 7.58634 12.8733C5.65301 12.2133 1.33301 9.45998 1.33301 4.79332C1.33301 2.73332 2.99301 1.06665 5.03967 1.06665C6.25301 1.06665 7.32634 1.65332 7.99967 2.55998C8.67301 1.65332 9.75301 1.06665 10.9597 1.06665C13.0063 1.06665 14.6663 2.73332 14.6663 4.79332C14.6663 9.45998 10.3463 12.2133 8.41301 12.8733Z" fill="white" stroke="#1C1C1C" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>                    
          </button>
          <div class="card__info">
            <h3 class="card__info-title">Горные лыжи</h3>
            <p class="card__info-price">5&nbsp;000&nbsp;₽</p>
          </div>
          <button class="card__button">В корзину</button>
        </article>
      </li>
      <li class="goods__item">
        <article class="goods__card card">
          <a href="#" class="card__link">
            <img src="/img/ski.png" alt="фото зимней экипировки" class="card__image">
          </a>
          <button class="like-button">
            <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.41301 12.8733C8.18634 12.9533 7.81301 12.9533 7.58634 12.8733C5.65301 12.2133 1.33301 9.45998 1.33301 4.79332C1.33301 2.73332 2.99301 1.06665 5.03967 1.06665C6.25301 1.06665 7.32634 1.65332 7.99967 2.55998C8.67301 1.65332 9.75301 1.06665 10.9597 1.06665C13.0063 1.06665 14.6663 2.73332 14.6663 4.79332C14.6663 9.45998 10.3463 12.2133 8.41301 12.8733Z" fill="white" stroke="#1C1C1C" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>                    
          </button>
          <div class="card__info">
            <h3 class="card__info-title">Горные лыжи</h3>
            <p class="card__info-price">5&nbsp;000&nbsp;₽</p>
          </div>
          <button class="card__button">В корзину</button>
        </article>
      </li>
      <li class="goods__item">
        <article class="goods__card card">
          <a href="#" class="card__link">
            <img src="/img/ski.png" alt="фото зимней экипировки" class="card__image">
          </a>
          <button class="like-button">
            <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.41301 12.8733C8.18634 12.9533 7.81301 12.9533 7.58634 12.8733C5.65301 12.2133 1.33301 9.45998 1.33301 4.79332C1.33301 2.73332 2.99301 1.06665 5.03967 1.06665C6.25301 1.06665 7.32634 1.65332 7.99967 2.55998C8.67301 1.65332 9.75301 1.06665 10.9597 1.06665C13.0063 1.06665 14.6663 2.73332 14.6663 4.79332C14.6663 9.45998 10.3463 12.2133 8.41301 12.8733Z" fill="white" stroke="#1C1C1C" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>                    
          </button>
          <div class="card__info">
            <h3 class="card__info-title">Горные лыжи</h3>
            <p class="card__info-price">5&nbsp;000&nbsp;₽</p>
          </div>
          <button class="card__button">В корзину</button>
        </article>
      </li>
      <li class="goods__item">
        <article class="goods__card card">
          <a href="#" class="card__link">
            <img src="/img/ski.png" alt="фото зимней экипировки" class="card__image">
          </a>
          <button class="like-button">
            <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.41301 12.8733C8.18634 12.9533 7.81301 12.9533 7.58634 12.8733C5.65301 12.2133 1.33301 9.45998 1.33301 4.79332C1.33301 2.73332 2.99301 1.06665 5.03967 1.06665C6.25301 1.06665 7.32634 1.65332 7.99967 2.55998C8.67301 1.65332 9.75301 1.06665 10.9597 1.06665C13.0063 1.06665 14.6663 2.73332 14.6663 4.79332C14.6663 9.45998 10.3463 12.2133 8.41301 12.8733Z" fill="white" stroke="#1C1C1C" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>                    
          </button>
          <div class="card__info">
            <h3 class="card__info-title">Горные лыжи</h3>
            <p class="card__info-price">5&nbsp;000&nbsp;₽</p>
          </div>
          <button class="card__button">В корзину</button>
        </article>
      </li>
    </ul>
  `;

  return mainSection(content, 'goods', 'goods__container');
};