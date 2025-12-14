import { createTheme, MantineProvider } from '@mantine/core';
import { HashRouter, Route, Routes } from 'react-router-dom';
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
      <HashRouter>
        <Routes>
          <Route path="/" element={<StatsPage />} />
          <Route path="/sources" element={<SourcesPage />} />
        </Routes>
      </HashRouter>
    </MantineProvider>
  );
}

export default App;
