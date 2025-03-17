// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function App() {  
  return <MantineProvider>{  
    <>
    <header>
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
          <li></li>
        </ul>
        
      </nav>
    </main>
    <footer></footer>
    </>  
  }</MantineProvider>
}

export default App
