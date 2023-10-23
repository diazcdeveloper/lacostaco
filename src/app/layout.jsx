import './globals.css'
import Navbar from '@/components/navbar/Navbar'


export const metadata = {
  title: 'la costa colombia fundation',
  description: 'Suporting, encouraging and training Colombian lead missions on the north and west coasts of Colombia',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
        </body>
    </html>
  )
}
