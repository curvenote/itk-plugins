import React from 'react';
import type { NodeRenderer } from '@myst-theme/providers';

export type ITKView2dDirective = {
  type: 'itkView2d';
  url: string;
};

export const ITKView2dRenderer: NodeRenderer = ({ node }: { node: ITKView2dDirective }) => {
  // TODO add html, custom tag and inject js
  // NOTE this file cannot be added to the plugin yet, but we should write it and we can
  // add it to a theme build directly
  return <div>ITK View 2d</div>;
};
