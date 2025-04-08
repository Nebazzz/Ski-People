export const mainSection = (content, sectionClass, containerClass) => {

  const sectionEl = document.createElement('section');
  sectionEl.classList.add(sectionClass);
  
  const containerEl = document.createElement('div');
  containerEl.classList.add('container');
  if (containerClass) {
    containerEl.classList.add(containerClass);
  }
  containerEl.innerHTML = content;
  
  sectionEl.append(containerEl);
  return sectionEl;
}