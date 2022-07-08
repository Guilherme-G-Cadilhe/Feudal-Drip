import "./global.styles.scss"

import Directory from './components/directory/directory.component.jsx'


const App = () => {

  const categories = [
    {
      id: 1,
      title: "Weapons",
      imageUrl: "https://cdna.artstation.com/p/assets/images/images/042/432/098/large/jagoda-lechowicz-swords.jpg?1634505738"
    },
    {
      id: 2,
      title: "Helmets",
      imageUrl: "https://cdnb.artstation.com/p/assets/images/images/022/205/415/large/arda-yavuz-iron-helmet-finished.jpg?1574512100"
    },
    {
      id: 3,
      title: "Accessories",
      imageUrl: "https://cdnb.artstation.com/p/assets/images/images/042/980/339/large/matthieu-rappeneau-terraria-accessory-resprites.jpg?1635959838"
    },
    {
      id: 4,
      title: "Womens Outfit",
      imageUrl: "https://i.pinimg.com/originals/5f/d1/d4/5fd1d42df250da982d127cc5fa8b15d4.gif"
    },
    {
      id: 5,
      title: "Mens Outfit",
      imageUrl: "https://i.pinimg.com/originals/5b/d4/49/5bd4499dacb640c0f76a0cb463cd8af3.png"
    }
  ]


  return (
    <Directory categories={categories} />
  );
};

export default App;
