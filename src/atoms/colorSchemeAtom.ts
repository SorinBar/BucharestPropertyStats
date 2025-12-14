import type { MantineColorScheme } from '@mantine/core';
import { atom } from 'jotai';

export const colorSchemeAtom = atom<MantineColorScheme>('light');
