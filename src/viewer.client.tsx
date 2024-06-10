import { useEffect, useRef } from "react";

import "@shoelace-style/shoelace/dist/themes/light.css";
import "@shoelace-style/shoelace/dist/components/card/card.js";
import "@shoelace-style/shoelace/dist/components/range/range.js";
import "@shoelace-style/shoelace/dist/components/select/select.js";
import "@shoelace-style/shoelace/dist/components/option/option.js";
import type { ItkViewer2d } from "@itk-viewer/element/itk-viewer-2d.js";
import "@itk-viewer/element/itk-viewer-2d.js";
import { ZarrMultiscaleSpatialImage } from "@itk-viewer/io/ZarrMultiscaleSpatialImage.js";

export function ViewerClient({ imagePath }: { imagePath: string }) {
  const viewer = useRef<ItkViewer2d>(null);

  useEffect(() => {
    const element = viewer.current;
    if (!element) {
      return;
    }
    const url = new URL(imagePath, document.location.origin);
    ZarrMultiscaleSpatialImage.fromUrl(url).then((image) => {
      const actor = element.getActor();
      actor!.send({ type: "setImage", image, name: "image" });
    });
  }, [imagePath, viewer]);

  return (
    <itk-viewer-2d
      ref={viewer}
      style={{ width: "100%", height: "100%" }}
    ></itk-viewer-2d>
  );
}

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      "itk-viewer-2d": ItkViewer2d;
    }
  }
}
