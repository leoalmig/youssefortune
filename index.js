#!/usr/bin/env node

const fortunes = [
  'Embedded!',
  'IPhone barato somente nas lojas americanas'
]

const randomIndex = Math.floor(Math.random() * fortunes.length)
const fortune = fortunes[randomIndex]

console.log(fortune, '- Youssef')
