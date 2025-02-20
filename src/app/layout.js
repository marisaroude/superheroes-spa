import { Onest } from 'next/font/google'
import './globals.css'
const inter = Onest({ subsets: ['cyrillic'], weight: '500' })
// import 'bootstrap/dist/js/bootstrap.bundle.min'; // Importa el JS de Bootstrap
import NavBar from '@/components/navBar/NavBar'
import 'bootstrap/dist/css/bootstrap.css'
export const metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <NavBar />
                {children}
            </body>
        </html>
    )
}
