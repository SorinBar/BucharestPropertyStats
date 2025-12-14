import { createTheme, MantineProvider } from '@mantine/core';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StatsPage from './pages/StatsPage';
import SourcesPage from './pages/SourcesPage';
import { useAtom } from 'jotai';
import { colorSchemeAtom } from './atoms/colorSchemeAtom';

const theme = createTheme({
  primaryColor: 'teal',
});

function App() {
  const [colorScheme] = useAtom(colorSchemeAtom);

  return (
    <MantineProvider theme={theme} defaultColorScheme={colorScheme}>
      <BrowserRouter>
        <Routes>
          <Route path="BucharestPropertyStats/" element={<StatsPage />} />
          <Route path="BucharestPropertyStats/sources" element={<SourcesPage />} />
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
