import { StatisticsSection } from '../components/StatisticsSection';
import BasePage from './common/BasePage';

const sections = [
  {
    label: 'Statistici',
    component: <StatisticsSection />,
  },
  {
    label: 'Surse',
    component: <div>TEST</div>,
  },
];

function HomePage() {
  return <BasePage sections={sections} />;
}

export default HomePage;
