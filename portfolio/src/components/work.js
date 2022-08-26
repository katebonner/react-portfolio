import React from 'react';

function Work() {
    const project = [
    { 
        title: 'databae', 
        date: 'May 2022',
        deployedApplication: 'https://warm-castle-61727.herokuapp.com/',
        github: 'https://github.com/katebonner/databae-chat',
        description: "this project, following the mvc paradigm in its architectural structure, is a chat app, where developers can chat publicly and anonymously after creating a user account.",
        technologies: ['sequelize', 'connect-session-sequelize', 'mysql2', 'dotenv', 'express.js', 'express-session', 'handlebars.js', 'express-handlebars', 'node.bcrypt.js', 'socket.io', 'javascript', 'html', 'css']
    },
    { 
        title: 'safe walk', 
        date: 'August 2022',
        deployedApplication: 'https://katebonner.github.io/safe-walk/',
        github: 'https://github.com/katebonner/safe-walk',
        description: "this project leverage the google maps api and the crimeometer api to overlay a heat map of recent assault and robbery location data within 10 miles of the user's position. this map is bolstered with directions to a desired destination input by the user.",
        technologies: ['google maps platform', 'crimoMeter', 'javascript', 'html', 'css']
    }
    ];

    return (
        <section>
            <h2>WORK</h2>
            <div>
                {project.map((project)=> (
                    <div class='project-container'>
                        <h3 class='project-elements'>{project.title}</h3>
                        <h5 class='project-elements'>{project.date}</h5>
                        <h5 class='project-elements'>
                            <a href={project.deployedApplication}>DEPLOYED APPLICATION</a>|<a href={project.github}>GITHUB</a>
                        </h5>
                        <p class='project-elements'>{project.description}</p>
                        {project.technologies.map((tag => (
                            <p class='tags'>{tag}</p>
                        )))}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Work;