import { Link } from 'react-router-dom';

const projects = [
    { id: 1, title: 'Project Alpha' },
    { id: 2, title: 'Project Beta' }
];

function Projects() {
    return (
        <div>
            <h2>Projects</h2>
            <ul>
                {projects.map(p => (
                    <li key={p.id}><Link to={`/projects/${p.id}`}>{p.title}</Link></li>
                ))}
            </ul>
        </div>
    );
}
export default Projects;