import { createTheme, MantineProvider } from '@mantine/core';
import HomePage from './pages/HomePage';
import { useAtom } from 'jotai';
import { colorSchemeAtom } from './atoms/colorSchemeAtom';

function App() {
  const [colorScheme] = useAtom(colorSchemeAtom);

  const theme = createTheme({
    primaryColor: colorScheme === 'light' ? 'blue' : 'yellow',
  });

  return (
    <MantineProvider theme={theme} forceColorScheme={colorScheme} defaultColorScheme="light">
      <HomePage />
    </MantineProvider>
  );
}

export default App;
