import React from 'react'
import "../../App.css"
function Writing() {
    return (
        <div>
            <div className="row bord">
                <div className=" col-4 p-1">
                    <div className="rotate">
                        <div class="container fluid no-rotate">
                        <div className="row">
                            <div className="col-3 pt-5">
                            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" className="bi bi-file-earmark-text green" viewBox="0 0 16 16">
                                <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"/>
                                <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"/>
                            </svg>
                            </div>
                            <div className="col-9">
                            <p className="ma">
                                <span className="green ">BETA</span> <br/>
                                <span className="head">Writing Assistant</span><br/>
                                <span className="justify">Your AI paired documents writer, for articles and blogs using AI technology</span>
                            </p>
                            
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Writing
