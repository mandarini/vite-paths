import type { Meta } from '@storybook/react';
import { App } from './app';
import { jslv1 } from '@vite-paths/jslv1';

console.log(jslv1());

const Story: Meta<typeof App> = {
  component: App,
  title: 'App',
};
export default Story;

export const Primary = {
  args: {},
};
