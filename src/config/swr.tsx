import { SWRConfig } from "swr";

const fetcher = (resource: RequestInfo, init?: RequestInit) =>
  fetch(resource, init).then((res) => res.json());

export const SWRProvider: React.FC = ({ children }) => (
  <SWRConfig
    value={{
      refreshInterval: 0,
      fetcher,
    }}
  >
    {children}
  </SWRConfig>
);

export const multiFetcher = (resources: RequestInfo[]) =>
  Promise.all(resources.map((resource) => fetcher(resource)));
