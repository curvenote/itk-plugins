import React from 'react';
import type { NodeRenderer } from '@myst-theme/providers';

export type ITKView2dDirective = {
  type: 'itkView2d';
  url: string;
};

export const ITKView2dRenderer: NodeRenderer = ({ node }: { node: ITKView2dDirective }) => {
  // TODO add html, custom tag and inject js
  return <div>ITK View 2d</div>;
};
