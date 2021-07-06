const mockProducts = [
  {
    id: "1",
    name: "Toyota",
    quantity: 2,
    price: 1700000000
  },
  {
    id: "2",
    name: "VinFast",
    quantity: 3,
    price: 1200000000
  },
  {
    id: "3",
    name: "Mazda",
    quantity: 2,
    price: 1500000000
  },
  {
    id: "4",
    name: "Ford",
    quantity: 5,
    price: 2500000000
  }
]

export const getProductListApi = (): Promise<ResGetProductApi> =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: {
          products: mockProducts
        },
        message: "Get the product successfully"
      })
    }, 100)
  })

export const getProductItemApi = (id: string): Promise<ResGetProductItemApi> =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = mockProducts.find(product => product.id === id)
      if (product) {
        resolve({
          data: {
            product
          },
          message: "Get the product successfully"
        })
      } else {
        reject(new Error("No products found"))
      }
    }, 100)
  })
