import React from 'react';

function Project() {
    return (

        <div class="container text-center">
            <h2 class="project-heading">Click the images to take a look at the Github Repository for each project.</h2>
            <div class="row top-row">
                <div class="col">
                    <div class="card image-card" style={{ width: '20rem' }}>
                        <a href= "https://github.com/Dschnepf7/Social-Media-API">
                        <img src="../project-images/Screenshot-for-assignment18.png" class="card-img-top" alt="placeholder image" />
                        </a>
                        <div class="card-body">
                            <p class="card-text">An example of the social media rest API using the insomnia app to display each CRUD method.</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card image-card" style={{ width: '20rem' }}>
                    <a href="https://github.com/Dschnepf7/JATE-Text-Editor">
                        <img src="./project-images/Jate-Screenshot.png" class="card-img-top" alt="placeholder image" />
                        </a>
                        <div class="card-body">
                            <p class="card-text">JATE (Just Another Text Editor) is just what it sounds like! Write, save and retrieve notes with this application.</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card image-card" style={{ width: '20rem' }}>
                    <a href="https://github.com/Dschnepf7/Work-Day-Scheduler">
                        <img src="./project-images/Workday-Scheduler.png" class="card-img-top" alt="placeholder image" />
                        </a>
                        <div class="card-body">
                            <p class="card-text">A Workday scheduler application that lets you add and delete tasks, as well as keeps trach of the time of day.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col image-column">
                    <div class="card image-card" style={{ width: '20rem' }}>
                        <a href="https://github.com/MattOz/Pupify">
                        <img src="./project-images/demo3.png" class="card-img-top" alt="placeholder image" />
                        </a>
                        <div class="card-body">
                            <p class="card-text">An example of utilizing third party API's. Every dog lover should check out this appliation!</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card image-card" style={{ width: '20rem' }}>
                        <a href="https://github.com/Dschnepf7/README-Generator">
                        <img src="../project-images/ReadMe-Generator.png" class="card-img-top" alt="placeholder image" />
                        </a>
                        <div class="card-body">
                            <p class="card-text">A backend application to generate professional ReadMe.md files. Utilizes the Inquirer npm package to take user input.</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card image-card" style={{ width: '20rem' }}>
                        <a href="https://github.com/Dschnepf7/NoteTaker">
                        <img src="./project-images/Note-Taker.png" class="card-img-top" alt="placeholder image" />
                        </a>
                        <div class="card-body">
                            <p class="card-text">A note taking app that saves notes written by the user to a database for retrieval at a later date.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default Project;
