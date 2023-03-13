const glob = require('glob')
const fs = require('fs')
const jsonArray = []

let imgArray = []

async function globber() {
  const picture = await glob('**/*.jpg')
  return picture
}

globber().then((x) => {
  imgArray = x
  for (let i = 0; i < imgArray.length; i++) {
    jsonArray.push({
      name: '',
      src: '/' + imgArray[i],
      id: i,
      price: '',
      compostion: '',
      color: '',
      product: ''
    })
  }
  fs.writeFileSync('./globerz.json', JSON.stringify(jsonArray))
})

// async function itemJson() {
//   for (let i = 0; i < imgArray.length; i++) {
//     jsonArray.push({
//       name: '',
//       src: '/' + imgArray[i],
//       id: i,
//       price: '',
//       compostion: '',
//       color: '',
//       product: ''
//     })
//   }
//   fs.writeFileSync('./newCustomer.json', JSON.stringify(jsonArray))
// }
