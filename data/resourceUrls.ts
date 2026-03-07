export type ResourceUrl = {
  id: string;
  source: string;
};

// Edge-safe resource source map used by /ressurs/[id].
// Add items here when a resource should render in the iframe route.
export const resourceUrls: ResourceUrl[] = [];
