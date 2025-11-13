// database.js - Incluindo produtos iniciais
const products = [
    { id: 1, name: 'Camisa Neon', price: 49.90, image: '../img/camisa neon.png', video: '../video/camisa neon video.mp4' }, 
    { id: 2, name: 'Camisa Omen', price: 49.90, image: '../img/camisa_omen-removebg-preview.png', video: '../video/camisa omen video.mp4' },
    { id: 3, name: 'Camisa Gekko', price: 49.90, image: '../img/camisa gekko.png', video: '../video/camisa gekko.mp4' },

];
const users = []; // Usuários serão armazenados aqui

module.exports = {
  products,
  users,
};
