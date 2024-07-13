import React, { useEffect } from 'react';
import type { NodeRenderer } from '@myst-theme/providers';

export type ITKView2dDirective = {
  type: 'itkView2d';
  imagePath: string;
};

export const ITKView2dRenderer: NodeRenderer = ({ node }: { node: ITKView2dDirective }) => {
  const [Viewer, setViewer] = React.useState<any>(null);

  useEffect(() => {
    const Viewer = React.lazy(() => import('../dist/viewer.mjs') as any); // todo point to built viewer bundle
    setViewer(Viewer);
  }, []);

  if (!Viewer) {
    return <div className="animate-pulse">loading...</div>;
  }
  return <Viewer imagePath={node.imagePath} />;
};
