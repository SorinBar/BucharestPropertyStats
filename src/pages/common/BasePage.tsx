import { useState } from 'react';
import classes from './BasePage.module.css';
import { Button, Container, Group, Text } from '@mantine/core';
import { MdDarkMode } from 'react-icons/md';
import { MdLightMode } from 'react-icons/md';
import { colorSchemeAtom } from '../../atoms/colorSchemeAtom';
import { useAtom } from 'jotai';

export interface BasePageProps {
  sections: {
    label: string;
    component: React.ReactNode;
  }[];
}

function BasePage({ sections }: BasePageProps) {
  const [colorScheme, setColorScheme] = useAtom(colorSchemeAtom);
  const [activeLabel, setActiveLabel] = useState(sections[0].label);

  return (
    <div className={classes.container}>
      <header className={classes.header}>
        <Container size="l" className={classes.headerInner}>
          <Text size="l" fw={700}>
            Bucharest Property Stats
          </Text>
          <div className={classes.rowContainer}>
            <Group gap={5} visibleFrom="xs">
              {sections.map((section) => (
                <Button
                  variant={activeLabel === section.label ? 'light' : 'subtle'}
                  key={section.label}
                  className={classes.link}
                  onClick={() => {
                    setActiveLabel(section.label);
                  }}
                >
                  {section.label}
                </Button>
              ))}
            </Group>
            <Button
              onClick={() => {
                setColorScheme(colorScheme === 'dark' ? 'light' : 'dark');
              }}
              variant="subtle"
            >
              {colorScheme === 'light' ? <MdDarkMode size={22} /> : <MdLightMode size={22} />}
            </Button>
          </div>
        </Container>
      </header>
      {sections.find((section) => section.label === activeLabel)?.component}
    </div>
  );
}

export default BasePage;
