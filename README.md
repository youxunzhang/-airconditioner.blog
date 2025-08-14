# AC Brand Directory

一个综合性的空调品牌目录网站，提供全球知名空调品牌的信息、联系方式和互动游戏。

## 功能特性

### 🏠 首页功能
- **品牌展示**: 展示50+全球知名空调品牌
- **品牌分类**: 按国内品牌、国际品牌、高端品牌、商用品牌分类
- **搜索功能**: 支持品牌名称、描述、分类搜索
- **品牌统计**: 实时显示各分类品牌数量
- **品牌LOGO**: 使用各品牌官网favicon图标

### 🎮 游戏功能
- **记忆游戏**: 匹配空调品牌LOGO
- **拼图游戏**: 品牌LOGO拼图（开发中）
- **知识问答**: 空调品牌知识测试（开发中）
- **打字游戏**: 品牌名称打字练习（开发中）

### 📱 响应式设计
- 支持桌面端、平板、手机端访问
- 现代化UI设计
- 流畅的用户体验

## 品牌分类

### 国内品牌 (Domestic Brands)
- Gree (格力)
- Midea (美的)
- Haier (海尔)
- Chigo (志高)
- AUX (奥克斯)

### 国际品牌 (International Brands)
- Daikin (大金)
- Panasonic (松下)
- Mitsubishi Heavy Industries (三菱重工)
- Mitsubishi Electric (三菱电机)
- LG (乐金)
- Samsung (三星)

### 高端品牌 (Premium Brands)
- Hitachi (日立)
- Toshiba (东芝)
- Fujitsu (富士通)
- Sharp (夏普)
- Bosch (博世)

### 商用品牌 (Commercial Brands)
- York (约克)
- Carrier (开利)
- Trane (特灵)
- Lennox (雷诺士)
- Rheem (瑞美)
- Goodman (古德曼)

## 技术栈

- **前端**: HTML5, CSS3, JavaScript (ES6+)
- **图标**: Font Awesome
- **样式**: 自定义CSS + 渐变设计
- **响应式**: CSS Grid + Flexbox

## 文件结构

```
-airconditioner.blog/
├── index.html          # 主页面
├── game.html           # 游戏页面
├── styles.css          # 主样式文件
├── game-styles.css     # 游戏样式文件
├── script.js           # 主JavaScript文件
├── game.js             # 游戏JavaScript文件
├── brand-logos.js      # 品牌LOGO数据
└── README.md           # 项目说明
```

## 使用方法

1. 直接在浏览器中打开 `index.html` 访问主页面
2. 点击导航栏的 "Games" 进入游戏页面
3. 使用搜索功能查找特定品牌
4. 点击品牌卡片查看详细信息
5. 在游戏页面选择喜欢的游戏进行娱乐

## 品牌LOGO获取

网站使用各品牌官网的favicon图标作为品牌LOGO：
- 主要路径: `/favicon.ico`
- 备用路径: `/logo.png`, `/logo.jpg`, `/favicon.png`
- 如果获取失败，会显示品牌首字母的占位符

## 更新日志

### v1.0.0
- ✅ 完成基础品牌目录功能
- ✅ 实现品牌搜索和分类
- ✅ 添加品牌LOGO显示
- ✅ 创建游戏页面框架
- ✅ 实现响应式设计
- ✅ 添加品牌统计功能

## 未来计划

- [ ] 完善游戏功能
- [ ] 添加更多品牌信息
- [ ] 实现用户评分系统
- [ ] 添加品牌比较功能
- [ ] 集成地图显示品牌位置

## 贡献

欢迎提交Issue和Pull Request来改进这个项目！

## 许可证

MIT License
