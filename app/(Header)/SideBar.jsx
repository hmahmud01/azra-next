export default SideBar = () => {
    return (
        <div>
            <aside className="left-sidebar">
                <div className="scroll-sidebar">
                    <nav className="sidebar-nav">
                        <ul id="sidebarnav">
                            <li><a className="waves-effect waves-dark" href="page_blank.html" aria-expanded="false"><i className="fas fa-cog"></i> <span className="hide-menu">Sample </span></a>
                            </li>
                            <li><a className="waves-effect waves-dark has-arrow" href="#" aria-expanded="false"><i className="far fa-window-restore"></i> <span className="hide-menu">UL sample </span></a>
                                <ul aria-expanded="false" className="collapse"> 
                                    <li><a href="#">TEST 1</a></li>        
                                    <li><a href="#">TEST 2</a></li>   
                                    <li><a href="#">TEST 3</a></li>                      
                                </ul>
                            </li>
                            <li><a className="waves-effect waves-dark" href="topbar.html" aria-expanded="false"><i className="fas fa-cogs"></i> <span className="hide-menu">Sample 2 </span></a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="sidebar-footer">
                    <a href="" className="link" data-toggle="tooltip" title="Settings"><i className="ti-settings"></i></a>
                    <a href="" className="link" data-toggle="tooltip" title="Email"><i className="mdi mdi-gmail"></i></a>
                    <a href="" className="link" data-toggle="tooltip" title="Logout"><i className="mdi mdi-power"></i></a> </div>
                
            </aside>
        </div>
        
    )
}