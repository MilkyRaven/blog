import Header from '../../components/Header';
import '../../styles/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      {/* Header */}
      {/* Banner */}
      <body>
        <Header></Header>
        {children}
      </body>
    </html>
  )
}
