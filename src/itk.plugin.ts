import type { MystPlugin } from 'myst-common';
import { itkView2d } from './directives';

const plugin: MystPlugin = {
  name: 'ITK Plugins',
  directives: [itkView2d],
  roles: [],
  transforms: [],
};

export default plugin;
