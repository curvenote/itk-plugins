import React from "react";
import type { NodeRenderer } from "@myst-theme/providers";
import { Viewer } from "./viewer.js";

export type ITKView2dDirective = {
  type: "itkView2d";
  imagePath: string;
};

export const ITKView2dRenderer: NodeRenderer = ({
  node,
}: {
  node: ITKView2dDirective;
}) => {
  // NOTE this file cannot be added to the plugin yet, but we should write it and we can
  // add it to a theme build directly
  return <Viewer imagePath={node.imagePath} />;
};
