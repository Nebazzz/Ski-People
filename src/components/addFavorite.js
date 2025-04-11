const list = document.querySelector('.goods__list');

ig (list) {
  list.addEventListener('click', e => {
    const id = Number(e.target.parentNode.dataset.id);
    const item = data.find(item => item.id === id);

    if (favoriteList.length === 0) {
      favoriteList.push(item);
    }
  })
}