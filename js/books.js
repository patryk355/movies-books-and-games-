const itemsDiv = document.querySelector('.items');

const items = [
  {
    id: 'b1',
    title: 'The Godfather',
    author: 'Mario Puzo',
    price: '8',
  },
  {
    id: 'b2',
    title: 'The Witcher: Last Wish',
    author: 'Andrzej Sapkowski',
    price: '10',
  },
  {
    id: 'b3',
    title: 'The Murder of Roger Ackroyd',
    author: 'Agatha Christie',
    price: '4',
  },
  {
    id: 'b4',
    title: 'And then there were none',
    author: 'Agatha Christie',
    price: '7',
  },
  {
    id: 'b5',
    title: 'Clean Code',
    author: 'Martin Robert',
    price: '20',
  },
  {
    id: 'b6',
    title: 'The Girl Who Played With Fire',
    author: 'Stieg Larsson',
    price: '18',
  },
  {
    id: 'b7',
    title: 'Steve Jobs: The Exclusive Biography',
    author: 'Walter Isaacson',
    price: '13',
  },
  {
    id: 'b8',
    title: 'Behind Closed Doors',
    author: 'B. A. Paris',
    price: '6',
  },
  {
    id: 'b9',
    title: 'The Therapist',
    author: 'B. A. Paris',
    price: '9',
  },
];

getData(items, 'books');
