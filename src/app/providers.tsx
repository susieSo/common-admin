"use client";
import {
  defaultShouldDehydrateQuery,
  isServer,
  Query,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

const DEFAULT_STALE_TIME = 10 * 60 * 1000;

function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: DEFAULT_STALE_TIME,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
      },
      dehydrate: {
        shouldDehydrateQuery: (query: Query) =>
          defaultShouldDehydrateQuery(query) ||
          query.state.status === "pending",
      },
    },
  });
}

let browserQueryClient: QueryClient | undefined = undefined;

function getQueryClient() {
  if (isServer) {
    return makeQueryClient();
  } else {
    if (!browserQueryClient) browserQueryClient = makeQueryClient();
    return browserQueryClient;
  }
}

export default function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = getQueryClient();

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
