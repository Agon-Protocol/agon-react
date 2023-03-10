import { Box } from "@chakra-ui/react";
import Sidebar from "./Sidebar";
import TopNav from "./TopNav";
import { AppShell } from "@saas-ui/react";
import { PropsWithChildren } from "react";
import Head from "next/head";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <AppShell sidebar={<Sidebar />}>
      <Head>
        <title>Agon Protocol</title>
      </Head>
      <TopNav />
      <Box as="main" flex="1" py="2" px="4" overflowY="auto">
        {children}
      </Box>
    </AppShell>
  );
}
