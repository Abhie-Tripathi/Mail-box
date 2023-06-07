import React from 'react'
import "./Mail.css"

const Mail = () => {
  return (
    <div className="container pb-mail-template1">
    <div className="row">
        <div className="col-md-12">
            <div className="row">
                <nav className="navbar navbar-default pb-mail-navbar">
                    <div className="container-fluid">
                        {/* <!-- Brand and toggle get grouped for better mobile display --> */}
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" id="brand" href="#">Hello, <u>Obama!</u></a>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="row">
                <div className="col-md-2" id="column-resize">
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <button id="btn_email" className="btn btn-danger" data-toggle="modal" data-target="#myModal">
                            New E-mail
                        </button>
                        <div id="treeview">
                        </div>
                    </div>
                    {/* <!-- /.navbar-collapse --> */}
                    {/* <!-- /.navbar-collapse --> */}
                </div>
                <div className="col-md-10">
                    <div className="row" id="row_style">
                        <div className="card ">
                            <div className="card-header">
                                <div className="row">
                                    <div className="col-xs-4 col-md-4">
                                        <p id="inbox_parag">INBOX</p>
                                    </div>
                                    <div className="col-xs-8 col-md-8">
                                        <div className="input-group">
                                            <input type="text" name="" placeholder="Seach...." className="form-control"/>
                                            <span className="input-group-btn">
                                                <button className="btn btn-primary" type="button" tabindex="-1">
                                                    <span className="fa fa-question fa-2x" area-hidden="true"></span>
                                                </button>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-block">
                                <div className="row">
                                    <div className="col-xs-9 col-md-10">
                                        <div className="btn-group">
                                            <a data-toggle="dropdown" href="#" className="btn btn-warning btn-md" aria-expanded="false">All
                        <i className="fa fa-angle-down "></i>
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li><a href="#">None</a></li>
                                                <li><a href="#">Read</a></li>
                                                <li><a href="#">Unread</a></li>
                                            </ul>
                                            <a href="#" className="btn btn-warning">
                                                <i className=" fa fa-refresh fa-lg"></i>
                                            </a>
                                        </div>
                                        <div className="btn-group">
                                            <a data-toggle="dropdown" href="#" className="btn btn-warning btn-md" aria-expanded="false">More
                        <i className="fa fa-angle-down "></i>
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li><a href="#">Mark all as read</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-xs-3 col-md-2">

                                        <div className="btn-group float-xs-right">
                                            <a data-toggle="dropdown" href="#" className="btn btn-primary" aria-expanded="false">
                                                <i className="fa fa-cog"></i>
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li><a href="#">Comfortable</a></li>
                                                <li><a href="#">Cozy</a></li>
                                                <li><a href="#">Compact</a></li>
                                                <hr/>
                                                <li><a href="#">Configure inbox</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <hr/>
                                <div id="grid"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Modal view --> */}
            <div className="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModal" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <div className="row">
                                <div className="col-md-4">
                                    <h5>New message</h5>
                                </div>
                                <div className="col-md-8">
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group row">
                                    <div className="col-md-3">
                                        <p>To: </p>
                                    </div>
                                    <div className="col-md-9">
                                        <input type="text" name="search" placeholder="Enter e-mail" className="form-control"/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-md-3">
                                        <p>Subject: </p>
                                    </div>
                                    <div className="col-md-9">
                                        <input type="text" name="search" className="form-control"/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-md-3">
                                        <p>Message: </p>
                                    </div>
                                    <div className="col-md-9">
                                        <textarea className="form-control" rows="10"></textarea>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-primary float-xs-left" id="btn_file">
                                <span className="fa fa-paperclip fa-2x"></span>
                                <input type="file" id="file" style={{display: "none"}} />
                            </button>
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Send</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- End of modal --> */}

        </div>
    </div>
</div>

  )
}

export default Mail