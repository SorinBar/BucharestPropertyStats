import React from 'react';
import { Button, Text, Card, createTheme, MantineProvider } from '@mantine/core';
import { ResponsiveLine } from '@nivo/line';

const data = [
  {
    id: 'japan',
    data: [
      {
        x: 'plane',
        y: 217,
      },
      {
        x: 'helicopter',
        y: 114,
      },
      {
        x: 'boat',
        y: 36,
      },
      {
        x: 'train',
        y: 169,
      },
      {
        x: 'subway',
        y: 71,
      },
      {
        x: 'bus',
        y: 296,
      },
      {
        x: 'car',
        y: 53,
      },
      {
        x: 'moto',
        y: 233,
      },
      {
        x: 'bicycle',
        y: 243,
      },
      {
        x: 'horse',
        y: 244,
      },
      {
        x: 'skateboard',
        y: 218,
      },
      {
        x: 'others',
        y: 153,
      },
    ],
  },
  {
    id: 'france',
    data: [
      {
        x: 'plane',
        y: 25,
      },
      {
        x: 'helicopter',
        y: 243,
      },
      {
        x: 'boat',
        y: 21,
      },
      {
        x: 'train',
        y: 33,
      },
      {
        x: 'subway',
        y: 194,
      },
      {
        x: 'bus',
        y: 126,
      },
      {
        x: 'car',
        y: 110,
      },
      {
        x: 'moto',
        y: 96,
      },
      {
        x: 'bicycle',
        y: 190,
      },
      {
        x: 'horse',
        y: 249,
      },
      {
        x: 'skateboard',
        y: 223,
      },
      {
        x: 'others',
        y: 166,
      },
    ],
  },
  {
    id: 'us',
    data: [
      {
        x: 'plane',
        y: 230,
      },
      {
        x: 'helicopter',
        y: 65,
      },
      {
        x: 'boat',
        y: 221,
      },
      {
        x: 'train',
        y: 109,
      },
      {
        x: 'subway',
        y: 237,
      },
      {
        x: 'bus',
        y: 100,
      },
      {
        x: 'car',
        y: 153,
      },
      {
        x: 'moto',
        y: 255,
      },
      {
        x: 'bicycle',
        y: 273,
      },
      {
        x: 'horse',
        y: 63,
      },
      {
        x: 'skateboard',
        y: 68,
      },
      {
        x: 'others',
        y: 10,
      },
    ],
  },
  {
    id: 'germany',
    data: [
      {
        x: 'plane',
        y: 111,
      },
      {
        x: 'helicopter',
        y: 122,
      },
      {
        x: 'boat',
        y: 296,
      },
      {
        x: 'train',
        y: 230,
      },
      {
        x: 'subway',
        y: 230,
      },
      {
        x: 'bus',
        y: 166,
      },
      {
        x: 'car',
        y: 13,
      },
      {
        x: 'moto',
        y: 288,
      },
      {
        x: 'bicycle',
        y: 236,
      },
      {
        x: 'horse',
        y: 230,
      },
      {
        x: 'skateboard',
        y: 57,
      },
      {
        x: 'others',
        y: 277,
      },
    ],
  },
  {
    id: 'norway',
    data: [
      {
        x: 'plane',
        y: 14,
      },
      {
        x: 'helicopter',
        y: 265,
      },
      {
        x: 'boat',
        y: 171,
      },
      {
        x: 'train',
        y: 218,
      },
      {
        x: 'subway',
        y: 37,
      },
      {
        x: 'bus',
        y: 166,
      },
      {
        x: 'car',
        y: 21,
      },
      {
        x: 'moto',
        y: 201,
      },
      {
        x: 'bicycle',
        y: 159,
      },
      {
        x: 'horse',
        y: 215,
      },
      {
        x: 'skateboard',
        y: 193,
      },
      {
        x: 'others',
        y: 229,
      },
    ],
  },
];

const theme = createTheme({
  /** Your theme override here */
});

function App() {
  return (
    <MantineProvider theme={theme} defaultColorScheme="light">
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          width: '100vw',
        }}
      >
        <Button
          onClick={() => {
            alert('CLICKED');
          }}
        >
          click me
        </Button>
        <Card
          shadow="sm"
          padding="lg"
          style={{
            width: 1000,
          }}
        >
          <Text mb="sm">Monthly Sales</Text>
          <div style={{ height: 400 }}>
            <ResponsiveLine
              data={data}
              margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
              yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
              axisBottom={{ legend: 'transportation', legendOffset: 36 }}
              axisLeft={{ legend: 'count', legendOffset: -40 }}
              pointSize={10}
              pointColor={{ theme: 'background' }}
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
      </div>
    </MantineProvider>
  );
}

export default App;
