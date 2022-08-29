import React from 'react';

function Work() {
    const project = [
    { 
        title: 'DATABAE',
        demoPath: 'databae.mov', 
        date: 'MAY 2022',
        deployedApplication: 'https://warm-castle-61727.herokuapp.com/',
        github: 'https://github.com/katebonner/databae-chat',
        description: "THIS PROJECT, FOLLOWING THE MVC PARADIGM IN ITS ARCHITECTURAL STRUCTURE, IS A CHAT APP, WHERE DEVELOPERS CAN CHAT PUBLICLY AND ANONYMOUSLY AFTER CREATING A USER ACCOUNT.",
        technologies: ['SEQUELIZE', 'CONNECT-SESSION-SEQUELIZE', 'MYSQL2', 'DOTENV', 'EXPRESS', 'EXPRESS-SESSION', 'HANDLEBARS', 'EXPRESS-HANDLEBARS', 'BCRYPT', 'SOCKET.IO', 'JAVASCRIPT', 'HTML', 'CSS']
    },
    { 
        title: 'SAFE WALK', 
        demoPath: 'safe-walk-demo.mov',
        date: 'AUGUST 2022',
        deployedApplication: 'https://katebonner.github.io/safe-walk/',
        github: 'https://github.com/katebonner/safe-walk',
        description: "CREATED FOR THE USER WHO WANTS TO MAP OUT THEIR SAFEST PATH WHLE WALKING HOME AT NIGHT. IT WAS DESIGNED FOR A USER TO INPUT THEIR HOME ADDRESS TO GENEARATE WALKING DIRECTIONS FROM THEIR CURRENT GEOLOCATION. THE MAP IS OVERLAID WITH A HEATMAP VISUALIZATION OF RECENT ASSAULT AND ROBBERY DATA TO INFORM THE USER OF POTENTIAL AREAS TO AVOID.",
        technologies: ['GOOGLE MAPS PLATFORM API', 'CRIMEOMETER API', 'JAVASCRIPT', 'HTML', 'CSS']
    }
    ];

    return (
        <section>
            <div class='work-container transitionIn'>
                {project.map((project)=> (
                    <div class='project-container'>
                        <video playsinline autoPlay loop muted src={require(`../assets/${project.demoPath}`)} type="video/mp4" alt={`${project.title} demo video`}></video>
                        <h3 class='project-title'>{project.title}</h3>
                        <h5 class='project-elements'>{project.date}</h5>
                        <h5 class='project-elements'>
                            <a href={project.deployedApplication}>DEPLOYED APPLICATION</a> | <a href={project.github}>GITHUB</a>
                        </h5>
                        <p class='project-elements'>{project.description}</p>
                        <section class='tag-container'>
                        {project.technologies.map((tag => (
                            <p class='tags'>{tag}</p>
                        )))}
                        </section>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Work;