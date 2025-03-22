// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';
import { AppShell, MantineProvider } from '@mantine/core';
import data from './assets/data.json';
// import { categories } from './constants';
import { useDisclosure } from '@mantine/hooks';
import Header from './Components/Header';

// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {  
  const [opened, { toggle }] = useDisclosure();
  return <MantineProvider>{  
    <AppShell
      header={{ height: { base: 48, sm: 60, lg: 76 } }}
      padding="md"
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      layout='default'
    >
      <AppShell.Header>
        <Header />
      </AppShell.Header>
      
      <AppShell.Navbar p='lg'>Test</AppShell.Navbar>
      {/* <AppShell.Navbar p="md">Filters
      <ul>Category
          {
            categories.map((category) => 
              <li key={category}>{category}</li>)
          }
        </ul>

        <ul>Brand
          
        </ul>
      </AppShell.Navbar> */}

      <AppShell.Main>
        Main
        <ul>Bikes
          {data.map((bike) => 
            <li key={bike.Name}>{bike.Name}</li>)}
        </ul>
      </AppShell.Main>

    </AppShell>
  }</MantineProvider>
}

export default App
