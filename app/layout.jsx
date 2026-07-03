import "./globals.css";

export const metadata = {
  title: "KARIVO | Websites, die im Kopf bleiben",
  description: "Premium-Websites für Unternehmen, die online Eindruck hinterlassen wollen.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
