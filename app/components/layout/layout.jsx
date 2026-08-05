import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../../assets/scss/main.scss";

import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";



import CustomJs from "../../components/common/CustomJs";
export const metadata = {
  title: "Travel Website",
  description: "Travel Booking Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body>

        <Header />

        <main>
          {children}
        </main>

        <Footer />

      </body>
    </html>
  );
}