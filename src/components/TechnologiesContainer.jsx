import {
    DiHtml5,
    DiCss3,
    DiSass,
    DiJsBadge,
    DiNodejsSmall,
    DiMysql,
    DiReact,
    DiJava
} from 'react-icons/di'

import { SiTypescript, SiPostman } from 'react-icons/si'

import '../styles/components/technologiesContainer.sass'

const technologies = [
    { id: "html", name: "HTML5", icon: <DiHtml5 /> },
    { id: "css", name: "CSS3", icon: <DiCss3 /> },
    { id: "sass", name: "SASS", icon: <DiSass /> },
    { id: "js", name: "JavaScript", icon: <DiJsBadge /> },
    { id: "ts", name: "TypeScript", icon: <SiTypescript /> },
    { id: "node", name: "Node", icon: <DiNodejsSmall /> },
    { id: "react", name: "React", icon: <DiReact /> },
    { id: "mysql", name: "MySQL", icon: <DiMysql /> },
    { id: "java", name: "Java", icon: <DiJava /> },
    { id: "postman", name: "POSTMAN", icon: <SiPostman /> },
]

const informacao = [
    { id: "html", text: "HTML5"},
    { id: "css", text: "CSS"},
    { id: "sass", text: "SASS"},
    { id: "js", text: "JavaScript"},
    { id: "ts", text: "TypeScript"},
    { id: "node", text: "Node"},
    { id: "react", text: "React"},
    { id: "mysql", text: "MySQL"},
    { id: "java", text: "Java"},
    { id: "postman", text: "POSTMAN"},
]
console.log(informacao); 

const TechnologiesContainer = () => {
    return (
        <section className='technologies-container'>
            <h2>Tecnologias</h2>
            <div className='technologies-grid'>
                {technologies.map((tech) => (
                    <div className='technology-card' id={tech.id} key={tech.id}>
                        {tech.icon}
                        <div className='technology-info'>
                            <h3>{tech.name}</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
export default TechnologiesContainer;