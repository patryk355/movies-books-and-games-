const itemsDiv = document.querySelector('.items');

const items = [
  {
    id: 'g1',
    title: 'Grand Theft Auto V',
    author: 'Rockstar',
    price: '30',
  },
  {
    id: 'g2',
    title: 'The Witcher 3 Wild Hunt',
    author: 'CD Project RED',
    price: '27',
  },
  {
    id: 'g3',
    title: 'Life Is Strange',
    author: 'Square Enix',
    price: '11',
  },
  {
    id: 'g4',
    title: 'South Park The Stick Of Truth',
    author: 'Ubisoft',
    price: '16',
  },
  {
    id: 'g5',
    title: 'FIFA 22',
    author: 'EA Sports',
    price: '20',
  },
  {
    id: 'g6',
    title: 'Max Payne',
    author: 'Remedy',
    price: '3',
  },
  {
    id: 'g7',
    title: 'Cyberpunk 2077',
    author: 'CD Project RED',
    price: '32',
  },
  {
    id: 'g8',
    title: 'Red Dead Redemption 2',
    author: 'Rockstar',
    price: '40',
  },
  {
    id: 'g9',
    title: "Assassin's Creed The Ezio Collection",
    author: 'Ubisoft',
    price: '27',
  },
];

getData(items, 'games');
