import AppLayout from "@/composites/layouts/AppLayout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppLayout>
      <Toaster />
      <Component {...pageProps} />
    </AppLayout>
  );
}
