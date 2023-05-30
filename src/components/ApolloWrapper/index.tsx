"use client"

import { ReactNode } from "react";
import { client } from "../../lib/apollo";
import { ApolloProvider } from "@apollo/client";

interface ApolloProps {
  children: ReactNode;
}
export function ApolloWrapper({ children }: ApolloProps) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
