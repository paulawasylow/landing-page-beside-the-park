import './styles.scss';
import { scrollToContent } from './functions/scrollToContent';
import { openMenu } from './functions/openMenu';

// init functions
openMenu();

scrollToContent('.js-open__menu', '.js-open__menu > li', '.c-main__container > section');
