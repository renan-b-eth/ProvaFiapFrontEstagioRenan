import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "FIAP-PROVA Renan Bezerra",
  description: "Prova Front-end Fiap",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
