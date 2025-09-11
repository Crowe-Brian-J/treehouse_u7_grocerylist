import { createRoot } from 'react-dom/client'

const desc =
  'I just learned how to create a React node and render it into the DOM'
const myTitleId = 'main-title'
const name = 'Brian'

const element = (
  //fragment - by wrapping elements in fragment, allows sending multiple tags as single object
  <>
    <h1 id={myTitleId}>{name}'s First React Element</h1>
    <p className="main-desc">{desc}</p>
  </>
)

const img = <img src="image.jpg" />

const root = createRoot(document.getElementById('root'))
root.render(element)
