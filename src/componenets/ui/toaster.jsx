import { Toaster as SonnerToaster } from "sonner";

export function Toaster() {
  return (
    <SonnerToaster
      position="bottom-right"
      theme="system"
      className="toaster group"
      toastOptions={{ className: "toast group" }}
    />
  );
}
