const lensList = []
const url = 'https://api.bestbuy.com/v1/products((search=Lens)&manufacturer=sony&name=e-mount*)?apiKey=n6AZysP6mrFp3ljQjiVlvYCQ&sort=image.asc&show=image,name,longDescription,salePrice&pageSize=70&format=json'

fetch(url)
.then(response => response.json())
.then(data => {
      lensList.push(data.products)
  }
)
     


export default lensList
