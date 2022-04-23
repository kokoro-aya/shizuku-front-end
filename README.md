# Shizuku (WIP)

A front-end for [simulatte](https://github.com/kokoro-aya/simulatte). Run on umijs/antd/monaco editor.

![](./img/screenshot.png)

This project provides a simple interface to present the features of Amatsukaze or Simulatte, a simple application inspired by
Karel and Playgrounds. The Amatsukaze consists of a fictive programming language and a grid where users could control
the character to move around and interact with it, which has been discontinued. The Simulatte consists of achieving the similar
features of game by using Kotlin DSL.

The Shizuku is a SPA with following features:

- Basic input/output/grid to present the gaming experience
- A modal to change and load another map
- A page of map editing (TODO)

Due to limit of Ant Design, dynamic dark mode cannot be achieved or could be very hard to implement so the idea was abandoned.

The Simulatte server has implemented some advanced features such as map leveling, platforms/locks, creative mode, .. As this
server is imperfect and presents tons of bugs regarding these advanced features, they are not featured in this project. Still,
I have implemented data structures regarding these features, but only reserved for future usage.

Besides, the game type is `default` only and no `creative` type. The idea of this project is just to feature some basic ideas 
of the playground.

The layout is on 2d, this has created difficulty to present information (for example, when different objects overlap), I have
displayed them in the tooltip prompt. This is not a good way to present info in a game and it's not fun, but I don't have a better
way.

Several implemented features since recent update:

- [x] Refactor with TypeScript
- [x] Adapt to the new server side (at last, I have decided to adapt to the [simulatte](https://github.com/kokoro-aya/simulatte) server instead of another one)
- [x] Adapt to Monaco Editor, link the editor to the playground and add support for themes
- [x] i18n in a typed way (4 languages are supported: zh-CN, zh-TW, en-US and fr-FR)
- [x] Some predefined maps and possibility to switch the map

More documentations are under construction.

These features could be implemented later if I am still interested in maintaining this project:

- [ ] A simple map editor
- [ ] A connected server and code evaluation *on the fly* (need to adapt the server at the same time)
- [ ] A gallery of maps and maybe a map server to persist data
