import cloneDeep from 'lodash.clonedeep'
const products = [
  {
    id: 1,
    name: 'Socks',
    description: 'A sock is an item of clothing worn on the feet and often covering the ankle or some part of the calf. Some type of shoe or boot is typically worn over socks. In ancient times, socks were made from leather or matted animal hair.',
    image: 'https://cdn.shopify.com/s/files/1/2537/2098/products/white_6a712e8a-6d3b-4daf-9c97-265231127887_1296x.png?v=1517234941',
    price: 15.00,
    stock: 4
  },
  {
    id: 2,
    name: 'Apple',
    description: 'An apple is a sweet, edible fruit produced by an apple tree (Malus pumila). Apple trees are cultivated worldwide, and are the most widely grown species in the genus Malus.',
    image: 'https://media.istockphoto.com/photos/red-apple-picture-id495878092?k=6&m=495878092&s=612x612&w=0&h=q9k5jN-1giBGZgTM6QhyKkPqtGf6vRpkgDzAwEz9DkY=',
    price: 2.20,
    stock: 150
  },
  {
    id: 3,
    name: 'Mint',
    description: 'While most types of candy provide little in the way of health benefits, peppermint candies may help some conditions and make you feel less guilty about enjoying an occasional sweet.',
    image: 'https://img-aws.ehowcdn.com/600x600p/photos.demandstudios.com/59/46/fotolia_1561237_XS.jpg',
    price: 1.80,
    stock: 380
  },
  {
    id: 4,
    name: 'Steel War Axe',
    description: 'The Steel War Axe is a one-handed weapon. Very powerful!',
    image: 'https://i.imgur.com/pIiPASs.png',
    price: 480,
    stock: 2
  },
  {
    id: 5,
    name: 'Lipstick',
    description: 'Lipstick is a cosmetic product containing pigments, oils, waxes, and emollients that apply color, texture, and protection to the lips.',
    image: 'https://www.narscosmetics.com/dw/image/v2/BBSK_PRD/on/demandware.static/-/Sites-itemmaster_NARS/default/dw75a825dd/hi-res/0607845094081.jpg?sw=856&sh=750&sm=fit',
    price: 11.40,
    stock: 24
  },
  {
    id: 6,
    name: 'Wig',
    description: 'Wig is a head covering made from human hair, animal hair, or synthetic fiber. The word wig is short for periwig.',
    image: 'https://i.imgur.com/gOPNHyl.jpg?1',
    price: 24.00,
    stock: 1
  },
  {
    id: 7,
    name: 'Shoes',
    description: 'Museum display of shoes. A shoe is an item of footwear intended to protect and comfort the human foot while the wearer is doing various activities. Shoes are also used as an item of decoration and fashion. The design of shoes has varied enormously through time and from culture to culture, with appearance originally being tied to function. Additionally, fashion has often dictated many design elements, such as whether shoes have very high heels or flat ones.',
    image: 'https://gloimg.rglcdn.com/rosegal/pdm-provider-img/straight-product-img/20171226/T010666/T0106660065/goods-img/1514317206439030954.jpg',
    price: 124.00,
    stock: 1
  },
  {
    id: 8,
    name: 'Potato',
    description: 'The potato is a starchy, tuberous crop from the perennial nightshade Solanum tuberosum.',
    image: 'https://rabbits.life/wp-content/uploads/2017/03/can-rabbits-eat-potatoes.jpg',
    price: 1.00,
    stock: 40
  },
  {
    id: 9,
    name: 'Pack of 4 fries',
    description: 'In the United States and most of Canada, the term fries refers to all dishes of fried elongated pieces of potatoes, while in the United Kingdom, Australia, South Africa (rarely), Ireland and New Zealand, thinly cut fried potatoes are sometimes called shoestring fries or skinny fries to distinguish them from chips, which are cut thicker.',
    image: 'http://mathewsfoods.com/images/steak%20frie.png',
    price: 0.75,
    stock: 12
  }
]

export const fetchAllProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(cloneDeep(products)), 1000)
  })
}

export const fetchProduct = id => {
  return new Promise((resolve) => {
    const product = products.find(product => product.id === id)
    setTimeout(() => resolve({ ...product }), 1000)
  })
}

export const submitOrder = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() > 0.5
        ? resolve()
        : reject(new Error('Order wasn\'t submitted due to a server error.'))
    }, 1000)
  })
}
