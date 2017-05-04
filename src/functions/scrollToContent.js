// reusable functions for DOM manipulation
const toArray = (nodeList) => Array.from(nodeList);

const isActiveClass = (array, activeClass) => array.find(elem => elem.className.includes(activeClass));

// find content selector by id equal to className target link
const findContent = (arrayContent, target) => arrayContent.find(content => content.id === target.className);


// scroll to content function
export function scrollToContent(parentLinkList, linkList, contentList) {

  const menu = document.querySelector(parentLinkList);

  const menuList = document.querySelectorAll(linkList);

  const dataContentList = document.querySelectorAll(contentList);

    dataContentList[0].classList.add('active');
    menuList[1].classList.add('active');

  const onClickMenu = () => {

    menu.addEventListener('click', (e) => {
      e.preventDefault();

      const target = e.target.nodeName !== 'LI' ? e.target.parentNode : null;

      const foundContent = findContent(toArray(dataContentList), target);

      const isActiveContent = isActiveClass(toArray(dataContentList), 'active');


      if (foundContent && isActiveContent) {

         isActiveContent.classList.remove('active');
      }

      foundContent.classList.add('active');
    });
  }

  onClickMenu();
}
