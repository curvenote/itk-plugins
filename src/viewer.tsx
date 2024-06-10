import { ClientOnly } from "remix-utils/client-only";
import { ViewerClient } from "~/viewer.client";

function SSRFallback() {
  return (
    <div style={{ width: "100%", height: "100%" }}>Loading itk-viewer...</div>
  );
}

export function Viewer({ imagePath }: { imagePath: string }) {
  return (
    <ClientOnly fallback={<SSRFallback />}>
      {() => <ViewerClient imagePath={imagePath} />}
    </ClientOnly>
  );
}
