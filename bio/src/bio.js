import React, { Component } from 'react';
import './styles/bio.css'

export default class Bio extends Component {
    render() {
        return (
            <div className="bio-body-wrapper">
                <div className="bio-wrapper">
                    <div className="card">
                        <div className="card-main-header">
                            Nithin Gangadharan
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            Current Status
                        </div>
                        <div className="card-content">
                            Senior Sotware Development Engineer, Media.Net, Pune
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            Bio
                        </div>
                        <div className="card-content">
                            - Finished schooling from Kendriya Vidyalaya(CBSE).<br />
                            - Graduated from Pune University with a Bachelor's Degree in Computer Engineering (B.E 2010-14).<br />
                            - Working as a software-dev since 2014, at multiple companies in Pune, India.<br />
                            - Love to work on interesting problems and write (or attempt to) clean code.<br />
                            - Built server-side solutions in PHP/Python/Go(GCE), forayed into the front-end, building websites with react-js and iOS apps in Objective-C.<br />
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            Public Profiles
                        </div>
                        <div className="card-content">
                            - <a href="https://github.com/gnithin" target="_blank"> Github </a><br />
                            - <a href="https://stackoverflow.com/users/1518924/kamehameha" target="_blank"> StackOverflow </a><br />
                            - <a href="https://twitter.com/kamehameha_dbz" target="_blank"> Twitter </a><br />
                            - <a href="https://www.linkedin.com/in/gnithin/" target="_blank"> LinkedIn </a> <br />
                            - <a href="mailto:nithin.linkin@gmail.com" target="_blank"> Email </a><br />
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            Hobbies
                        </div>
                        <div className="card-content">
                            <div className="card-content-header">
                                Fav Bands
                            </div>
                            - Metallica<br />
                            - Opeth<br />
                            - Pink Floyd<br />
                            <br />
                            <div className="card-content-header">
                                Fav Books
                            </div>
                            - Foundation - Isaac Asimov<br />
                            - Sapiens: A Brief History of Humankind - Yuval Noah Harari<br />
                            - The Ancient Art of Stoic Joy -  William B Irvine<br />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}