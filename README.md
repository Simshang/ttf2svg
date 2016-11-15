###　**ttf2svg**

- `核心功能` : 将ttf格式转换为svg格式

### **注意**

1. 当ttf文件超过`19`个时候报错, 于是将ttf文件分为5组, 每组17个ttf字体

2. 每次运行更改fontPath读取不同的字体文件

3. 先运行`createSvgDir.js`生成保存目录, 再运行`ttf2svg.js`生成svg文件
