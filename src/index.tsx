import './index.css';
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';

const button = document.querySelector("#main button");
tippy(button!, {
    content: 'Hello, tippy'
})
