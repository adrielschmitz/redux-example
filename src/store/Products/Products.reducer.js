import products_mock from '../../mocks/products.json'

const ProductsReducer = (state = products_mock.products, action) => {
  switch (action.type) {
    case 'TOGGLE_PRODUCT':
      return state.map(product => product.id === action.payload ? {...product, checked: !product.checked} : product)
    default:
      return state
  }
}

export default ProductsReducer
