// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import data from './assets/data.json';

// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {  
  return <MantineProvider>{  
    <>
    <header>
    <div>{data.length}</div>
    <nav>
      <div>Home</div>
      <div>Shopping Cart</div>
      <div>Profile</div>
      <div>Log Out</div>
    </nav>
    </header>

    <main>
      <nav>
        <ul>Category
          <li>Electric</li>
          <li>Kids & Junior</li>
          <li>Mountain</li>
          <li>Road</li>
        </ul>
        
        <ul>Brand
          <li>Electric</li>
          <li>Kids & Junior</li>
          <li>Mountain</li>
          <li>Road</li>
        </ul>
      </nav>
    </main>
    <footer></footer>
    </>  
  }</MantineProvider>
}

export default App
