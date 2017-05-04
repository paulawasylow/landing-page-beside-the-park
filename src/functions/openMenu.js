export function openMenu() {

  const target = document.querySelector('.c-nav__hamburger');

  const open = (element, one, two) => {
    const elem = document.querySelector(element);
    elem.setAttribute('data-state', elem.getAttribute('data-state') === one ? two : one);
    elem.getAttribute('data-state') === two ? target.classList.add('active') : target.classList.remove('active');
  };

  return {
  open: target.addEventListener('click', () => open('.c-nav .js-open__menu', 'closed', 'open'), false)
  }
}
