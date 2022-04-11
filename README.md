# Shizuku (WIP)

A front-end for [Amatsukaze](https://github.com/kokoro-aya/amatsukaze). Run on umijs/antd.

**Currently this project is under refactoring. The goals of this refactor is listed below the description.**

![](./img/screenshot.png)

This project provides a simple interface to present the features of Amatsukaze, a simple application inspired by
Karel and Playgrounds. The Amatsukaze consists of a fictive programming language and a grid where users could control
the character to move around and interact with it.

The Shizuku is a SPA with following features:

- Basic input/output/grid to present the gaming experience
- A modal to change and load another map (TODO)
- A page of map editing (TODO)

Here are several features that could be achieved in the current refactor:

- [ ] Adapt to the new server side (may need to have minor work in the server side with some Kotlin code)
- [ ] Refactor with TypeScript
- [ ] i18n, themes and dark mode
- [ ] Some predefined maps and possibility to switch the map
- [ ] A simple map editor
- [ ] A connected server and code evaluation *on the fly* (need to adapt the server at the same time)
- [ ] A gallery of maps and maybe a map server to persist data

The refactoring is expected to end at around 26/04.
