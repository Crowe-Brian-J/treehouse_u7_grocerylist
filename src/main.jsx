import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

const items = [
  { name: 'Apples', quantityAmount: 5, id: 1 },
  { name: 'Bananas', quantityAmount: 7, id: 2 },
  { name: 'Box of Pasta', quantityAmount: 1, id: 3 },
  { name: 'Cookies', quantityAmount: 12, id: 4 }
]

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

const App = (props) => {
  return (
    <div className="grocery-list">
      <Header title="Grocery List" itemTotal={props.initialList.length} />
      {/* Grocery List */}
      {props.initialList.map((item) => {
        return (
          <Item
            itemName={item.name}
            quantityAmount={item.quantityAmount}
            key={item.id}
          />
        )
      })}
    </div>
  )
}

const root = createRoot(document.getElementById('root'))
root.render(
  <StrictMode>
    <App initialList={items} />
  </StrictMode>
)
