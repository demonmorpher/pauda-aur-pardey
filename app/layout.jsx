export const metadata = {
  title: "Pauda aur Pardey",
  description: "Plants, curtains, and beautiful home styling"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
