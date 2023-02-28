const fs = require('fs')
const jsonArray = []
const imgArray = []

async function ls() {
  const dir = await fs.promises.opendir('public/img1200')
  for await (const dirent of dir) {
    imgArray.push(dirent.name)
  }
  await itemJson()
}

ls()

async function itemJson() {
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
  fs.writeFileSync('./newCustomer.json', JSON.stringify(jsonArray))
}
