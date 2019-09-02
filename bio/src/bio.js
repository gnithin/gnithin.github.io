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
                            MS in CS, Northeastern University, Boston
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-header">
                            Professional Experience
                        </div>
                        <div className="card-content">
                           - Senior Software Development Engineer, Media.Net (Aug 2018 - Jun 2019)<br />
                           - Software Developer, Media.Net (Dec 2016 - Aug 2018)<br />
                           - Engineer Software, Ignite Solutions (Apr 2015 - Dec 2016)<br />
                           - Associate Software Engineer, ACI Worldwide (Jul 2014 - Apr 2015)
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-header">
                            <a href="./nithin-gangadharan.pdf" target="_blank">Resume (Pdf)</a>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-header">
                            Bio
                        </div>
                        <div className="card-content">
                            - Born in Chennai, Tamil Nadu, India. <br />
                            - Finished schooling from Kendriya Vidyalaya (CBSE).<br />
                            - Graduated from Pune University with a Bachelor's Degree in Computer Engineering (B.E 2010-14).<br />
                            - Worked as a software-dev since 2014, at multiple companies in Pune, India.<br />
                            - Commenced MS in CS, at Northeastern University, from Sept 2019. <br />
                            - Loves to work on interesting problems and write (or attempt to) clean code.<br />
                            - Interested on working across the stack; client-side, server-side or anything else :) <br />
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-header">
                            Programming Languages/Frameworks I like
                        </div>
                        <div className="card-content">
                            - JavaScript - React-JS <br />
                            - Golang <br />
                            - Python <br />
                            - Objective-C - iOS <br />
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-header">
                            Public Profiles
                        </div>
                        <div className="card-content">
                            - <a href="https://github.com/gnithin" target="_blank" rel="noopener noreferrer"> Github </a><br />
                            - <a href="https://stackoverflow.com/users/1518924/kamehameha" target="_blank" rel="noopener noreferrer"> StackOverflow </a><br />
                            - <a href="https://twitter.com/kamehameha_dbz" target="_blank" rel="noopener noreferrer"> Twitter </a><br />
                            - <a href="https://www.linkedin.com/in/gnithin/" target="_blank" rel="noopener noreferrer"> LinkedIn </a> <br />
                            - <a href="mailto:nithin.linkin@gmail.com" target="_blank" rel="noopener noreferrer"> Email </a><br />
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-header">
                            Hobbies
                        </div>
                        <div className="card-content">
                            - Likes to go on a run.<br />
                            - Loves Metallica.<br />
                            - Enjoys reading a novel, occasionally. <br />
                            <br />
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
                            - A Thousand Splendid Suns - Khaled Hosseini<br />
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