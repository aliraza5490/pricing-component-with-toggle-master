import { useState, React } from 'react';
import Price from './components/Price';
import './app.css';
import './switch-button.css';

import getData from './utils/data';

function App() {
  const [checked, setChecked] = useState(false)
  const handleClick = (e) => {
    setChecked(e.target.checked);
  }
  var data = !checked ? getData('annual') : getData('monthly');
  return (
    <div className='pricing-component'>
      <div className="pricing-head">
        <h2>Our Pricing</h2>
        <div className="toggle-container">
          Annually
          <div className="toggler-btn">
            {/* <!-- Rounded switch --> */}
            <label className="switch" onClick={handleClick}>
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
          </div>
          Monthly
        </div>
      </div>
      <div className="price-container">
        <Price data={data[0]} />
        <Price data={data[1]} />
        <Price data={data[2]} />
      </div>
      <div className="attribution">
        Challenge by <a rel='noreferrer noopener' href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by Ali.
      </div>
    </div>
  )
}

export default App;
