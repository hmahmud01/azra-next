/* eslint-disable @next/next/no-head-element */

import Footer from "./(Footer)/Footer";
import Header from "./(Header)/Header";
import BaseLayout from "./BaseLayout";

export default function RootLayout({ children }) {
  return (
    <html>
      <Header />
      <body className="fix-header fix-sidebar card-no-border">
            <div className="preloader">
                <svg className="circular" viewBox="25 25 50 50">
                    <circle className="path" cx="50" cy="50" r="20" fill="none" strokeWidth="2" strokeMiterlimit="10" />
                </svg>
            </div>
            <div id="main-wrapper">
                <TopBar />
                <SideBar />
                <div className="page-wrapper">
                    <div className="container-fluid">
                    {children}
                    </div>
                    <Footer />
                </div>
            </div>
            <Scripts />
        </body>
    </html>
  );
}
