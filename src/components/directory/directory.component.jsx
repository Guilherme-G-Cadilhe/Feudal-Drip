import "./directory.styles.scss"

import DirectoryItem from '../directory-item/directory-item.component.jsx'

const categories = [
  {
    id: 1,
    title: "hats",
    imageUrl: "https://i.ibb.co/ZYW3VTp/brown-brim.png",
    route: 'shop/hats'
  },
  {
    id: 2,
    title: "jackets",
    imageUrl: "https://i.ibb.co/XzcwL5s/black-shearling.png",
    route: 'shop/jackets'
  },
  {
    id: 3,
    title: "sneakers",
    imageUrl: "https://i.ibb.co/0s3pdnc/adidas-nmd.png",
    route: 'shop/sneakers'
  },
  {
    id: 4,
    title: "womens",
    imageUrl: "https://i.ibb.co/7CQVJNm/blue-tank.png",
    route: 'shop/womens'
  },
  {
    id: 5,
    title: "mens",
    imageUrl: "https://i.ibb.co/xJS0T3Y/camo-vest.png",
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