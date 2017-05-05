/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.openMenu = openMenu;\nfunction openMenu() {\n\n  var target = document.querySelector('.c-nav__hamburger');\n\n  var open = function open(element, one, two) {\n    var elem = document.querySelector(element);\n    elem.setAttribute('data-state', elem.getAttribute('data-state') === one ? two : one);\n    elem.getAttribute('data-state') === two ? target.classList.add('active') : target.classList.remove('active');\n  };\n\n  return {\n    open: target.addEventListener('click', function () {\n      return open('.c-nav .js-open__menu', 'closed', 'open');\n    }, false)\n  };\n}//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZnVuY3Rpb25zL29wZW5NZW51LmpzP2FhYjgiXSwibmFtZXMiOlsib3Blbk1lbnUiLCJ0YXJnZXQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJvcGVuIiwiZWxlbWVudCIsIm9uZSIsInR3byIsImVsZW0iLCJzZXRBdHRyaWJ1dGUiLCJnZXRBdHRyaWJ1dGUiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJhZGRFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiOzs7OztRQUFnQkEsUSxHQUFBQSxRO0FBQVQsU0FBU0EsUUFBVCxHQUFvQjs7QUFFekIsTUFBTUMsU0FBU0MsU0FBU0MsYUFBVCxDQUF1QixtQkFBdkIsQ0FBZjs7QUFFQSxNQUFNQyxPQUFPLFNBQVBBLElBQU8sQ0FBQ0MsT0FBRCxFQUFVQyxHQUFWLEVBQWVDLEdBQWYsRUFBdUI7QUFDbEMsUUFBTUMsT0FBT04sU0FBU0MsYUFBVCxDQUF1QkUsT0FBdkIsQ0FBYjtBQUNBRyxTQUFLQyxZQUFMLENBQWtCLFlBQWxCLEVBQWdDRCxLQUFLRSxZQUFMLENBQWtCLFlBQWxCLE1BQW9DSixHQUFwQyxHQUEwQ0MsR0FBMUMsR0FBZ0RELEdBQWhGO0FBQ0FFLFNBQUtFLFlBQUwsQ0FBa0IsWUFBbEIsTUFBb0NILEdBQXBDLEdBQTBDTixPQUFPVSxTQUFQLENBQWlCQyxHQUFqQixDQUFxQixRQUFyQixDQUExQyxHQUEyRVgsT0FBT1UsU0FBUCxDQUFpQkUsTUFBakIsQ0FBd0IsUUFBeEIsQ0FBM0U7QUFDRCxHQUpEOztBQU1BLFNBQU87QUFDUFQsVUFBTUgsT0FBT2EsZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUM7QUFBQSxhQUFNVixLQUFLLHVCQUFMLEVBQThCLFFBQTlCLEVBQXdDLE1BQXhDLENBQU47QUFBQSxLQUFqQyxFQUF3RixLQUF4RjtBQURDLEdBQVA7QUFHRCIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIG9wZW5NZW51KCkge1xyXG5cclxuICBjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYy1uYXZfX2hhbWJ1cmdlcicpO1xyXG5cclxuICBjb25zdCBvcGVuID0gKGVsZW1lbnQsIG9uZSwgdHdvKSA9PiB7XHJcbiAgICBjb25zdCBlbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbGVtZW50KTtcclxuICAgIGVsZW0uc2V0QXR0cmlidXRlKCdkYXRhLXN0YXRlJywgZWxlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3RhdGUnKSA9PT0gb25lID8gdHdvIDogb25lKTtcclxuICAgIGVsZW0uZ2V0QXR0cmlidXRlKCdkYXRhLXN0YXRlJykgPT09IHR3byA/IHRhcmdldC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKSA6IHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4ge1xyXG4gIG9wZW46IHRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IG9wZW4oJy5jLW5hdiAuanMtb3Blbl9fbWVudScsICdjbG9zZWQnLCAnb3BlbicpLCBmYWxzZSlcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Z1bmN0aW9ucy9vcGVuTWVudS5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.scrollToContent = scrollToContent;\n// reusable functions for DOM manipulation\nvar toArray = function toArray(nodeList) {\n  return Array.from(nodeList);\n};\n\nvar isActiveClass = function isActiveClass(array, activeClass) {\n  return array.find(function (elem) {\n    return elem.className.includes(activeClass);\n  });\n};\n\n// find content selector by id equal to className target link\nvar findContent = function findContent(arrayContent, target) {\n  return arrayContent.find(function (content) {\n    return content.id === target.className;\n  });\n};\n\n// scroll to content function\nfunction scrollToContent(parentLinkList, linkList, contentList) {\n\n  var menu = document.querySelector(parentLinkList);\n\n  var menuList = document.querySelectorAll(linkList);\n\n  var dataContentList = document.querySelectorAll(contentList);\n\n  dataContentList[0].classList.add('active');\n  menuList[1].classList.add('active');\n\n  var onClickMenu = function onClickMenu() {\n\n    menu.addEventListener('click', function (e) {\n      e.preventDefault();\n\n      var target = e.target.nodeName !== 'LI' ? e.target.parentNode : null;\n\n      var foundContent = findContent(toArray(dataContentList), target);\n\n      var isActiveContent = isActiveClass(toArray(dataContentList), 'active');\n\n      if (foundContent && isActiveContent) {\n\n        isActiveContent.classList.remove('active');\n      }\n\n      foundContent.classList.add('active');\n    });\n  };\n\n  onClickMenu();\n}//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZnVuY3Rpb25zL3Njcm9sbFRvQ29udGVudC5qcz9kNmQ3Il0sIm5hbWVzIjpbInNjcm9sbFRvQ29udGVudCIsInRvQXJyYXkiLCJub2RlTGlzdCIsIkFycmF5IiwiZnJvbSIsImlzQWN0aXZlQ2xhc3MiLCJhcnJheSIsImFjdGl2ZUNsYXNzIiwiZmluZCIsImVsZW0iLCJjbGFzc05hbWUiLCJpbmNsdWRlcyIsImZpbmRDb250ZW50IiwiYXJyYXlDb250ZW50IiwidGFyZ2V0IiwiY29udGVudCIsImlkIiwicGFyZW50TGlua0xpc3QiLCJsaW5rTGlzdCIsImNvbnRlbnRMaXN0IiwibWVudSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm1lbnVMaXN0IiwicXVlcnlTZWxlY3RvckFsbCIsImRhdGFDb250ZW50TGlzdCIsImNsYXNzTGlzdCIsImFkZCIsIm9uQ2xpY2tNZW51IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIm5vZGVOYW1lIiwicGFyZW50Tm9kZSIsImZvdW5kQ29udGVudCIsImlzQWN0aXZlQ29udGVudCIsInJlbW92ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFVZ0JBLGUsR0FBQUEsZTtBQVZoQjtBQUNBLElBQU1DLFVBQVUsU0FBVkEsT0FBVSxDQUFDQyxRQUFEO0FBQUEsU0FBY0MsTUFBTUMsSUFBTixDQUFXRixRQUFYLENBQWQ7QUFBQSxDQUFoQjs7QUFFQSxJQUFNRyxnQkFBZ0IsU0FBaEJBLGFBQWdCLENBQUNDLEtBQUQsRUFBUUMsV0FBUjtBQUFBLFNBQXdCRCxNQUFNRSxJQUFOLENBQVc7QUFBQSxXQUFRQyxLQUFLQyxTQUFMLENBQWVDLFFBQWYsQ0FBd0JKLFdBQXhCLENBQVI7QUFBQSxHQUFYLENBQXhCO0FBQUEsQ0FBdEI7O0FBRUE7QUFDQSxJQUFNSyxjQUFjLFNBQWRBLFdBQWMsQ0FBQ0MsWUFBRCxFQUFlQyxNQUFmO0FBQUEsU0FBMEJELGFBQWFMLElBQWIsQ0FBa0I7QUFBQSxXQUFXTyxRQUFRQyxFQUFSLEtBQWVGLE9BQU9KLFNBQWpDO0FBQUEsR0FBbEIsQ0FBMUI7QUFBQSxDQUFwQjs7QUFHQTtBQUNPLFNBQVNWLGVBQVQsQ0FBeUJpQixjQUF6QixFQUF5Q0MsUUFBekMsRUFBbURDLFdBQW5ELEVBQWdFOztBQUVyRSxNQUFNQyxPQUFPQyxTQUFTQyxhQUFULENBQXVCTCxjQUF2QixDQUFiOztBQUVBLE1BQU1NLFdBQVdGLFNBQVNHLGdCQUFULENBQTBCTixRQUExQixDQUFqQjs7QUFFQSxNQUFNTyxrQkFBa0JKLFNBQVNHLGdCQUFULENBQTBCTCxXQUExQixDQUF4Qjs7QUFFRU0sa0JBQWdCLENBQWhCLEVBQW1CQyxTQUFuQixDQUE2QkMsR0FBN0IsQ0FBaUMsUUFBakM7QUFDQUosV0FBUyxDQUFULEVBQVlHLFNBQVosQ0FBc0JDLEdBQXRCLENBQTBCLFFBQTFCOztBQUVGLE1BQU1DLGNBQWMsU0FBZEEsV0FBYyxHQUFNOztBQUV4QlIsU0FBS1MsZ0JBQUwsQ0FBc0IsT0FBdEIsRUFBK0IsVUFBQ0MsQ0FBRCxFQUFPO0FBQ3BDQSxRQUFFQyxjQUFGOztBQUVBLFVBQU1qQixTQUFTZ0IsRUFBRWhCLE1BQUYsQ0FBU2tCLFFBQVQsS0FBc0IsSUFBdEIsR0FBNkJGLEVBQUVoQixNQUFGLENBQVNtQixVQUF0QyxHQUFtRCxJQUFsRTs7QUFFQSxVQUFNQyxlQUFldEIsWUFBWVgsUUFBUXdCLGVBQVIsQ0FBWixFQUFzQ1gsTUFBdEMsQ0FBckI7O0FBRUEsVUFBTXFCLGtCQUFrQjlCLGNBQWNKLFFBQVF3QixlQUFSLENBQWQsRUFBd0MsUUFBeEMsQ0FBeEI7O0FBR0EsVUFBSVMsZ0JBQWdCQyxlQUFwQixFQUFxQzs7QUFFbENBLHdCQUFnQlQsU0FBaEIsQ0FBMEJVLE1BQTFCLENBQWlDLFFBQWpDO0FBQ0Y7O0FBRURGLG1CQUFhUixTQUFiLENBQXVCQyxHQUF2QixDQUEyQixRQUEzQjtBQUNELEtBaEJEO0FBaUJELEdBbkJEOztBQXFCQUM7QUFDRCIsImZpbGUiOiIxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gcmV1c2FibGUgZnVuY3Rpb25zIGZvciBET00gbWFuaXB1bGF0aW9uXHJcbmNvbnN0IHRvQXJyYXkgPSAobm9kZUxpc3QpID0+IEFycmF5LmZyb20obm9kZUxpc3QpO1xyXG5cclxuY29uc3QgaXNBY3RpdmVDbGFzcyA9IChhcnJheSwgYWN0aXZlQ2xhc3MpID0+IGFycmF5LmZpbmQoZWxlbSA9PiBlbGVtLmNsYXNzTmFtZS5pbmNsdWRlcyhhY3RpdmVDbGFzcykpO1xyXG5cclxuLy8gZmluZCBjb250ZW50IHNlbGVjdG9yIGJ5IGlkIGVxdWFsIHRvIGNsYXNzTmFtZSB0YXJnZXQgbGlua1xyXG5jb25zdCBmaW5kQ29udGVudCA9IChhcnJheUNvbnRlbnQsIHRhcmdldCkgPT4gYXJyYXlDb250ZW50LmZpbmQoY29udGVudCA9PiBjb250ZW50LmlkID09PSB0YXJnZXQuY2xhc3NOYW1lKTtcclxuXHJcblxyXG4vLyBzY3JvbGwgdG8gY29udGVudCBmdW5jdGlvblxyXG5leHBvcnQgZnVuY3Rpb24gc2Nyb2xsVG9Db250ZW50KHBhcmVudExpbmtMaXN0LCBsaW5rTGlzdCwgY29udGVudExpc3QpIHtcclxuXHJcbiAgY29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocGFyZW50TGlua0xpc3QpO1xyXG5cclxuICBjb25zdCBtZW51TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwobGlua0xpc3QpO1xyXG5cclxuICBjb25zdCBkYXRhQ29udGVudExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGNvbnRlbnRMaXN0KTtcclxuXHJcbiAgICBkYXRhQ29udGVudExpc3RbMF0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICBtZW51TGlzdFsxXS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuXHJcbiAgY29uc3Qgb25DbGlja01lbnUgPSAoKSA9PiB7XHJcblxyXG4gICAgbWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0Lm5vZGVOYW1lICE9PSAnTEknID8gZS50YXJnZXQucGFyZW50Tm9kZSA6IG51bGw7XHJcblxyXG4gICAgICBjb25zdCBmb3VuZENvbnRlbnQgPSBmaW5kQ29udGVudCh0b0FycmF5KGRhdGFDb250ZW50TGlzdCksIHRhcmdldCk7XHJcblxyXG4gICAgICBjb25zdCBpc0FjdGl2ZUNvbnRlbnQgPSBpc0FjdGl2ZUNsYXNzKHRvQXJyYXkoZGF0YUNvbnRlbnRMaXN0KSwgJ2FjdGl2ZScpO1xyXG5cclxuXHJcbiAgICAgIGlmIChmb3VuZENvbnRlbnQgJiYgaXNBY3RpdmVDb250ZW50KSB7XHJcblxyXG4gICAgICAgICBpc0FjdGl2ZUNvbnRlbnQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZvdW5kQ29udGVudC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb25DbGlja01lbnUoKTtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZnVuY3Rpb25zL3Njcm9sbFRvQ29udGVudC5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzLnNjc3M/ZDA4OSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiIyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zdHlsZXMuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(2);\n\nvar _scrollToContent = __webpack_require__(1);\n\nvar _openMenu = __webpack_require__(0);\n\n// init functions\n(0, _openMenu.openMenu)();\n\n(0, _scrollToContent.scrollToContent)('.js-open__menu', '.js-open__menu > li', '.c-main__container > section');//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/OTU1MiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBOztBQUNBOztBQUVBO0FBQ0E7O0FBRUEsc0NBQWdCLGdCQUFoQixFQUFrQyxxQkFBbEMsRUFBeUQsOEJBQXpEIiwiZmlsZSI6IjMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vc3R5bGVzLnNjc3MnO1xyXG5pbXBvcnQgeyBzY3JvbGxUb0NvbnRlbnQgfSBmcm9tICcuL2Z1bmN0aW9ucy9zY3JvbGxUb0NvbnRlbnQnO1xyXG5pbXBvcnQgeyBvcGVuTWVudSB9IGZyb20gJy4vZnVuY3Rpb25zL29wZW5NZW51JztcclxuXHJcbi8vIGluaXQgZnVuY3Rpb25zXHJcbm9wZW5NZW51KCk7XHJcblxyXG5zY3JvbGxUb0NvbnRlbnQoJy5qcy1vcGVuX19tZW51JywgJy5qcy1vcGVuX19tZW51ID4gbGknLCAnLmMtbWFpbl9fY29udGFpbmVyID4gc2VjdGlvbicpO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiXSwic291cmNlUm9vdCI6IiJ9");

/***/ })
/******/ ]);