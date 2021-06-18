import React, { useState } from "react";
import Home from "./Home";
const initialFormValues = {
  name: '',
  size: '',
  Steak: false,
  Japs: false,
  sauce: '',
  special: '',
}
const Pizzaorder = []
const App = () => {
  const [formvalues, setFormvalues] = useState(initialFormValues)
  const [order, setOrder] = useState(Pizzaorder)

  function Change(evt) {
    const { name, value } = evt.target
    setFormvalues({ ...formvalues, [name]: value })

  }

  function Submit(event) {
    event.preventDefault()
    const newOrder = {
      name: formvalues.name.trim(),
      size: formvalues.size.trim(),
      special: formvalues.special.trim(),
      sauce: formvalues.sauce.trim(),
      Toppings: ['Japs', 'Steak'].filter(top => formvalues[top])
    }
    setOrder([...order, newOrder])
    setFormvalues(initialFormValues)
  }

  return (
    <>
      <h1>Lambda Eats</h1>
      <p>You can remove this code and create your own header</p>
      <Home />
      <form onSubmit={Submit}>
        <label> Name
          <input
            name='name'
            type='text'
            onChange={Change}
            value={formvalues.name}
          />
        </label>

        <label>  special
          <input
            name='special'
            type='text'
            onChange={Change}
            value={formvalues.special}
          />
        </label>
        <label>Size
          <select
            onChange={Change}
            value={formvalues.size}
            name='size'
          >
            <option value=''>- Select an option -</option>
            <option value='X-large'>X-Large</option>
            <option value='Large'>Large</option>
            <option value='Medium'>Medium</option>
            <option value='Small'>Small</option>
          </select>
        </label><br></br>
        <label>Original
          <input
            type='radio'
            name='sauce'
            value='original'
            onChange={Change}
            checked={formvalues.sauce === 'original'}
          />
        </label>
        <label>BBQ
          <input
            type='radio'
            name='sauce'
            value='BBQ'
            onChange={Change}
            checked={formvalues.sauce === 'BBQ'}
          />
        </label>
        <h3>Toppings</h3>
        <label>Japs
          <input
            type='checkbox'
            name='Japs'
            checked={formvalues.Japs}
            onChange={Change}
          />
        </label>
        <label>Steak
          <input
            type='checkbox'
            name='Steak'
            checked={formvalues.Steak}
            onChange={Change}
          />
        </label>
      </form>
    </>
  );
};
export default App;
