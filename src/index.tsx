import './index.css';
import tippy, {createSingleton} from 'tippy.js';
import 'tippy.js/dist/tippy.css';

// const buttons = document.querySelectorAll("#main button");

const singleton = createSingleton([
    ...tippy('#button1', {
        content: '<button>Hello, tippy1</button>',
        placement: 'right',
        allowHTML:true
    }),
    ...tippy('#button2', {
        content: '<button>Hello, tippy2</button>',
        placement: 'right',
    }),
], {
    delay: 500,
    allowHTML: false,
    // 只有出现在overrides中的属性，前面独立instance中的定义才能覆盖这里的通用定义
    overrides: ['allowHTML']
})
singleton.show()
