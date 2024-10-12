import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { CartProvider } from './context/CartContext'; // Adjust the import path
import { UserProvider } from './context/UserContext'; // Import UserProvider

export const metadata = { 
  title: 'Chaotix Showcase Website',
  description: 'Showcasing the Chaotix clothing brand.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <UserProvider>  {/* Wrap in UserProvider to manage user state */}
          <CartProvider>
            <Header />  {/* Header now inside both providers */}
            {children}  {/* Page content now inside both providers */}
            <Footer />  {/* Footer now inside both providers */}
          </CartProvider>
        </UserProvider>
      </body>
    </html>
  );
}
