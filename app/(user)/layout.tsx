import Header from '../../components/Header';
import '../../styles/globals.css';
import Banner from '../../components/Banner';

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
        <Banner></Banner>
        {children}
      </body>
    </html>
  )
}
