#!/usr/bin/env node

const fortunes = [
  'Sabia que o iPhone tá barato nas lojas Americanas? Mas só nas americanas, nas brasileiras continua caro',
  'O Lair cresceu muito profissionalmente',
  'Em uma cidade com muitas motos Yamaha e só duas Honda, qual o nome do filme? Pocahondas!'
]

const randomIndex = Math.floor(Math.random() * fortunes.length)
const fortune = fortunes[randomIndex]

console.log(fortune, '- Youssef')
