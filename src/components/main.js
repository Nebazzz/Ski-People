let rendered = false;

export const main = (child) => {

  if (rendered) {
    return document.querySelector('main');
  }

  const el = document.createElement('main');

  document.body.append(el);

  rendered = true;

  return el;
}