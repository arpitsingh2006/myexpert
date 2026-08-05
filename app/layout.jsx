import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "flatpickr/dist/flatpickr.min.css";

import { SettingsProvider } from "./context/SettingsContext";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./assets/scss/main.scss";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import "aos/dist/aos.css";
import CustomJs from "./components/common/CustomJs";


export const metadata = {
  title: "Travel Website",
  description: "Travel Booking Website",
};


export default function RootLayout({ children }) {

  return (
    <html lang="en" suppressHydrationWarning>

      <body>

        <SettingsProvider>

          <CustomJs />

          <Header />

          <main>
            {children}
          </main>

          <Footer />

        </SettingsProvider>

      </body>

    </html>
  );
}