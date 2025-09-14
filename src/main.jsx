import { StrictMode, useState } from 'react'
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
      <Counter />
    </div>
  )
}

const Counter = () => {
  const [quantityAmount, setQuantityAmount] = useState(0)

  // event handlers
  const incrementQuantity = () => {
    // use updater function to ensure reliability
    setQuantityAmount((q) => q + 1)
  }

  const decrementQuantity = () => {
    if (quantityAmount > 0) {
      setQuantityAmount((q) => q - 1)
    }
  }

  return (
    <div className="quantity">
      <span className="qty-label">QTY</span>
      <button className="increment" onClick={incrementQuantity}>
        +
      </button>
      <button className="decrement" onClick={decrementQuantity}>
        -
      </button>
      <span className="quantity-amount">{quantityAmount}</span>
    </div>
  )
}

const App = (props) => {
  return (
    <div className="grocery-list">
      <Header title="Grocery List" itemTotal={props.initialList.length} />
      {/* Grocery List */}
      {props.initialList.map((item) => {
        return <Item itemName={item.name} key={item.id} />
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
