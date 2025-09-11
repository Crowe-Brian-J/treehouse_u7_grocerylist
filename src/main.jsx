import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

const Header = (props) => {
  return (
    <header>
      <h1>{props.title}</h1>
      <span className="total-items">Items: {props.itemTotal}</span>
    </header>
  )
}

const Item = (props) => {
  return (
    <div className="item">
      <button className="remove-item" />
      <span className="item-name">{props.itemName}</span>
      <Counter quantityAmount={props.quantityAmount} />
    </div>
  )
}

const Counter = (props) => {
  return (
    <div className="quantity">
      <span className="qty-label">QTY</span>
      <button className="increment">+</button>
      <button className="decrement">-</button>
      <span className="quantity-amount">{props.quantityAmount}</span>
    </div>
  )
}

const App = () => {
  return (
    <div className="grocery-list">
      <Header title="Grocery List" itemTotal={1} />

      {/* Grocery List */}
      <Item itemName="Apples" quantityAmount={5} />
      <Item itemName="Bananas" quantityAmount={7} />
      <Item itemName="Box of Pasta" quantityAmount={1} />
      <Item itemName="Cookies" quantityAmount={12} />
    </div>
  )
}

const root = createRoot(document.getElementById('root'))
root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
