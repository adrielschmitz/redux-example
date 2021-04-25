import React from 'react'
import LineChart from '../../shared/LineChart'
import AppContainer from '../AppContainer/AppContainer'
import AppHeader from '../AppHeader'
import ShoppingList from '../ShoppingList'
import { Wrapper, Container } from './App.styles'
import extractPercentage from '../../utils/extractPercentage'
import { useSelector, useDispatch } from 'react-redux'
import { toggleProduct } from '../../store/Products/Products.actions'

const colors = ['#62CBC6', '#00ABAD', '#00858C', '#006073', '#004D61']

function App() {
  const dispatch = useDispatch()
  const products = useSelector(state => state.products)
  const selectedProducts = useSelector(state => state.products.filter(prod => prod.checked))

  const totalPrice = useSelector(state =>
    state.products
      .filter(prod => prod.checked)
      .reduce((a, b) => a + b.price, 0)
  )

  const handleToggle = (id) => {
    dispatch(toggleProduct(id))
  }

  return <Wrapper>
    <Container>
      <AppHeader/>
      <AppContainer
        left={
          <ShoppingList
            title="Produtos disponíveis"
            products={products}
            onToggle={handleToggle}
          />
        }
        middle={
          <ShoppingList
            title="Sua lista de compras"
            products={selectedProducts}
            onToggle={handleToggle}
          />
        }
        right={<div>
          estatisticas

          <LineChart
            color={colors[0]}
            title="saudavel"
            percentage={extractPercentage(
              selectedProducts.length,
              selectedProducts
                .filter(product => product.tags.includes('healthy'))
                .length
            )}
          />
          <LineChart
            color={colors[1]}
            title="nao tao saudavel"
            percentage={extractPercentage(
              selectedProducts.length,
              selectedProducts
                .filter(product => product.tags.includes('junk'))
                .length
            )}
          />
          <LineChart
            color={colors[2]}
            title="limpeza"
            percentage={extractPercentage(
              selectedProducts.length,
              selectedProducts
                .filter(product => product.tags.includes('cleaning'))
                .length
            )}
          />
          <LineChart
            color={colors[3]}
            title="outros"
            percentage={extractPercentage(
              selectedProducts.length,
              selectedProducts
                .filter(product => product.tags.includes('others'))
                .length
            )}
          />

          <div style={{marginTop: 12}}>
            <h2 style={{fontWeight: 400, fontSize: 12, color: '#00364A'}}>
              previsão de gastos:
            </h2>
            <div style={{fontSize: 24}}>
              {totalPrice.toLocaleString('pt-br', {
                minimumFractionDigits: 2,
                style: 'currency',
                currency: 'BRL'
              })}
            </div>
          </div>

        </div>
        }
      />
    </Container>
  </Wrapper>
}

export default App
