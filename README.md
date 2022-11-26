TypeScript Vite Tippyjs Singleton Demo
===========================

每次只允许出现一个tooltip

注意：每个tippy的instance本来都可以有各自的配置，但是一旦被createSingleton包起来之后，它们就必须
使用singleton中的配置。只有在`overrides`中定义配置名允许被单个instance覆盖。

```
npm install
npm start
```
