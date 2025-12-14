import { atomWithStorage } from 'jotai/utils';

export const colorSchemeAtom = atomWithStorage<'light' | 'dark'>('colorSchemeAtom', 'light');
