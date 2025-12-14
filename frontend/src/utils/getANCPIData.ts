import type { LineSeries } from '@nivo/line';
import ANCPIData from '../data/ANCPI.json';

const RO_MONTHS: Record<string, number> = {
  ianuarie: 0,
  februarie: 1,
  martie: 2,
  aprilie: 3,
  mai: 4,
  iunie: 5,
  iulie: 6,
  august: 7,
  septembrie: 8,
  octombrie: 9,
  noiembrie: 10,
  decembrie: 11,
};

const METRICS = [
  'Extravilan agricol',
  'Extravilan neagricol',
  'Intravilan cu constructii',
  'Intravilan fara constructii',
  'Nr unitati individuale',
  'Total imobile',
] as const;

type MetricKey = (typeof METRICS)[number];

const METRICS_NEW_NAMES: Record<MetricKey, string> = {
  'Extravilan agricol': 'Teren Extravilan Agricol',
  'Extravilan neagricol': 'Teren Extravilan Neagricol',
  'Intravilan cu constructii': 'Teren Intravilan cu Constructii',
  'Intravilan fara constructii': 'Teren Intravilan fara Constructii',
  'Nr unitati individuale': 'Nr Unitati Individuale',
  'Total imobile': 'Total Imobile',
};

function parseRoMonthYear(value: string): Date {
  const [month, year] = value.toLowerCase().split(' ');
  return new Date(Number(year), RO_MONTHS[month]);
}

export function getANCPIDataPerMonth(): LineSeries[] {
  const sortedData = [...ANCPIData].sort(
    (a, b) => parseRoMonthYear(a.data).getTime() - parseRoMonthYear(b.data).getTime(),
  );

  return METRICS.map((metric) => ({
    id: METRICS_NEW_NAMES[metric],
    data: sortedData.map((item) => ({
      x: item.data,
      y: item[metric],
    })),
  }));
}

export function getANCPIDataPerYear(): LineSeries[] {
  const dataByYear: Record<string, (typeof ANCPIData)[0][]> = {};
  ANCPIData.forEach((item) => {
    const year = parseRoMonthYear(item.data).getFullYear().toString();
    if (!dataByYear[year]) dataByYear[year] = [];
    dataByYear[year].push(item);
  });

  const years = Object.keys(dataByYear).sort();
  return METRICS.map((metric) => ({
    id: METRICS_NEW_NAMES[metric],
    data: years.map((year) => {
      const items = dataByYear[year];
      const sum = items.reduce((acc, cur) => acc + cur[metric], 0);
      const avg = sum / items.length;
      return { x: year, y: avg };
    }),
  }));
}
