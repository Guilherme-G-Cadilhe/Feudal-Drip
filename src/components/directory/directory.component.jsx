import "./directory.styles.scss"

import DirectoryItem from '../directory-item/directory-item.component.jsx'

const categories = [
  {
    id: 1,
    title: "hats",
    imageUrl: "https://cdna.artstation.com/p/assets/images/images/042/432/098/large/jagoda-lechowicz-swords.jpg?1634505738",
    route: 'shop/hats'
  },
  {
    id: 2,
    title: "jackets",
    imageUrl: "https://cdnb.artstation.com/p/assets/images/images/022/205/415/large/arda-yavuz-iron-helmet-finished.jpg?1574512100",
    route: 'shop/jackets'
  },
  {
    id: 3,
    title: "sneakers",
    imageUrl: "https://cdnb.artstation.com/p/assets/images/images/042/980/339/large/matthieu-rHomeeneau-terraria-accessory-resprites.jpg?1635959838",
    route: 'shop/sneakers'
  },
  {
    id: 4,
    title: "womens",
    imageUrl: "https://i.pinimg.com/originals/5f/d1/d4/5fd1d42df250da982d127cc5fa8b15d4.gif",
    route: 'shop/womens'
  },
  {
    id: 5,
    title: "mens",
    imageUrl: "https://i.pinimg.com/originals/5b/d4/49/5bd4499dacb640c0f76a0cb463cd8af3.png",
    route: 'shop/mens'
  }
]

const Directory = () => {
  return (
    <div className='directory-container'>

      {categories.map((category) => {
        return (
          <DirectoryItem key={category.id} category={category} />
        )
      })}
    </div>
  )
}

export default Directory