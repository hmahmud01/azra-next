import { Children } from "react";
import SideBar from "./(Header)/SideBar";
import TopBar from "./(Header)/TopBar";
import Footer from "./(Footer)/Footer";
import Scripts from "./(Footer)/Scripts";

export default BaseLayout = () => {
    return(
        <body className="fix-header fix-sidebar card-no-border">
            <div className="preloader">
                <svg className="circular" viewBox="25 25 50 50">
                    <circle className="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10" />
                </svg>
            </div>
            <div id="main-wrapper">
                <TopBar />
                <SideBar />
                <div className="page-wrapper">
                    <div className="container-fluid">
                        {Children}
                    </div>
                    <Footer />
                </div>
            </div>
            <Scripts />
        </body>
    )
}