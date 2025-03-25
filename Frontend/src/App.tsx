// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';
import { AppShell, Flex, MantineProvider } from '@mantine/core';
import data from './assets/data.json';
import { categories } from './constants';
import { useDisclosure } from '@mantine/hooks';
import Header from './Components/Header';
import BikeCard from './Components/Card';

// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {  
  const [opened, { toggle }] = useDisclosure();
  return <MantineProvider>{  
    <AppShell
      // header={{ height: { base: 48, sm: 60, lg: 76 } }}
      header={{ height: 60 }}
      padding='md'
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      layout='default'
    >
      <AppShell.Header>
        <Header />
      </AppShell.Header>
      
      {/* <AppShell.Navbar p='lg'>Test</AppShell.Navbar> */}
      <AppShell.Navbar p="md">
        Filters
      <ul>Category
          {
            categories.map((category) => 
              <li key={category}>{category}</li>)
          }
        </ul>

        <div>Brand</div>
        <div>Price</div>
        <div>Frame</div>
        <div>Frame Size</div>
        <div>Year</div>
      </AppShell.Navbar>

      <AppShell.Main>
        <Flex gap="md">
        {`${data.length} Results` }
        
          {data.map((bike) => 
            <BikeCard key={bike.name} {...bike} />
            // <li key={bike.name}>{bike.name} {bike.frameSize}</li>
            )}
            </Flex>
      </AppShell.Main>

    </AppShell>
  }</MantineProvider>
}

export default App
