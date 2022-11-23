import Link from "next/link";

export default TopBar = () => {
    return (
        <div>
            <header className="topbar">
                <nav className="navbar top-navbar navbar-expand-md navbar-light">
                    <div className="navbar-header">
                        {/* <Link href="/" legacyBehavior>
                            <a className="navbar-brand">
                                <b>
                                    <img src="./assets/images/logo-icon.png" alt="homepage" className="dark-logo" />
                                    <img src="./assets/images/logo-light-icon.png" alt="homepage" className="light-logo" />
                                </b>
                                <span>
                                <span className="light-logo">CNexPay</span>
                                </span> 
                            </a>
                        </Link> */}
                        <a className="navbar-brand" href="index.html">
                            <b>
                                <img src="./assets/images/logo-icon.png" alt="homepage" className="dark-logo" />
                                <img src="./assets/images/logo-light-icon.png" alt="homepage" className="light-logo" />
                            </b>
                            <span>
                            <span className="light-logo">CNexPay</span>
                            </span> 
                        </a>
                    </div>
                    <div className="navbar-collapse">
                        <ul className="navbar-nav mr-auto mt-md-0">
                            <li className="nav-item"> <a className="nav-link nav-toggler hidden-md-up text-muted waves-effect waves-dark" href=""><i className="mdi mdi-menu"></i></a> </li>
                            <li className="nav-item"> <a className="nav-link sidebartoggler hidden-sm-down text-muted waves-effect waves-dark" href=""><i className="ti-menu"></i></a> </li>
                        </ul>
                        <ul className="navbar-nav my-lg-0">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle text-muted text-muted waves-effect waves-dark" href="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="mdi mdi-message"></i>
                                    <div className="notify"> <span className="heartbit"></span> <span className="point"></span> </div>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right mailbox scale-up">
                                    <ul>
                                        <li>
                                            <div className="drop-title">Notifications</div>
                                        </li>
                                        <li>
                                            <div className="message-center">
                                                <a href="#">
                                                    <div className="btn btn-danger btn-circle"><i className="fa fa-link"></i></div>
                                                    <div className="mail-contnet">
                                                        <h5>Luanch Admin</h5> <span className="mail-desc">Just see the my new admin!</span> <span className="time">9:30 AM</span> </div>
                                                </a>
                                                <a href="#">
                                                    <div className="btn btn-success btn-circle"><i className="ti-calendar"></i></div>
                                                    <div className="mail-contnet">
                                                        <h5>Event today</h5> <span className="mail-desc">Just a reminder that you have event</span> <span className="time">9:10 AM</span> </div>
                                                </a>
                                                <a href="#">
                                                    <div className="btn btn-info btn-circle"><i className="ti-settings"></i></div>
                                                    <div className="mail-contnet">
                                                        <h5>Settings</h5> <span className="mail-desc">You can customize this template as you want</span> <span className="time">9:08 AM</span> </div>
                                                </a>
                                                <a href="#">
                                                    <div className="btn btn-primary btn-circle"><i className="ti-user"></i></div>
                                                    <div className="mail-contnet">
                                                        <h5>Pavan kumar</h5> <span className="mail-desc">Just see the my admin!</span> <span className="time">9:02 AM</span> </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li>
                                            <a className="nav-link text-center" href=""> <strong>Check all notifications</strong> <i className="fa fa-angle-right"></i> </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle text-muted waves-effect waves-dark" href="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img src="./assets/images/users/1.jpg" alt="user" className="profile-pic user_profile_pic" /></a>
                                <div className="dropdown-menu dropdown-menu-right scale-up">
                                    <ul className="dropdown-user">
                                        <li>
                                            <div className="dw-user-box">
                                                <div className="u-img"><img className="user_profile_pic" src="./assets/images/users/1.jpg" alt="user" /></div>
                                                <div className="u-text">
                                                    <h4 id="user_name"></h4>
                                                    <p className="text-muted" id="user_email">&nbsp;</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li role="separator" className="divider"></li>
                                        <li><a href="/profile"><i className="ti-user"></i> My Profile</a></li>
                                        <li><a href="#"><i className="ti-wallet"></i> My Balance</a></li>
                                        <li><a href="#"><i className="ti-email"></i> Inbox</a></li>
                                        <li role="separator" className="divider"></li>
                                        <li><a href="#"><i className="ti-settings"></i> Account Setting</a></li>
                                        <li role="separator" className="divider"></li>
                                        <li><a href="/auth/sign-out"><i className="fa fa-power-off"></i> Logout</a></li>
                                    </ul>
                                </div>
                            </li>                    
                        </ul>
                    </div>
                </nav>
            </header>
        </div>
    )
}