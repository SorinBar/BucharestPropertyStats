import { Card, Text } from '@mantine/core';
import { ResponsiveLine, type LineSeries } from '@nivo/line';

interface LineChartCardProps {
  title: string;
  data: LineSeries[];
  width?: number;
}

export function LineChartCard({ title, data, width }: LineChartCardProps) {
  return (
    <Card
      shadow="sm"
      padding="lg"
      style={{
        width: '96%',
        overflow: 'auto',
      }}
    >
      <Text mb="sm">{title}</Text>
      <div style={{ height: 400, width }}>
        <ResponsiveLine
          data={data}
          margin={{ top: 50, right: 200, bottom: 50, left: 60 }}
          yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
          axisBottom={{ legend: 'transportation', legendOffset: 36 }}
          axisLeft={{ legend: 'count', legendOffset: -40 }}
          pointSize={10}
          pointColor={{ theme: 'background' }}
          theme={{
            axis: {
              legend: {
                text: {
                  fill: 'var(--mantine-color-text)',
                },
              },
              ticks: {
                text: {
                  fill: 'var(--mantine-color-text)',
                },
              },
            },
            legends: {
              text: {
                fill: 'var(--mantine-color-text)',
              },
            },
          }}
          pointBorderWidth={2}
          pointBorderColor={{ from: 'seriesColor' }}
          pointLabelYOffset={-12}
          enableTouchCrosshair={true}
          useMesh={true}
          legends={[
            {
              anchor: 'bottom-right',
              direction: 'column',
              translateX: 100,
              itemWidth: 80,
              itemHeight: 22,
              symbolShape: 'circle',
            },
          ]}
        />
      </div>
    </Card>
  );
}
