import { Link } from "react-router-dom";

export default function Projectist({ filteredProjects }) {

    return (<ul>
                {filteredProjects?.length > 0 ? (
                    filteredProjects.map((p) => (
                        <li key={p.id}>
                            <Link to={`/projects/${p.id}`}>{p.title} ({p.type})</Link>
                        </li>
                    ))
                ) : (
                    <p>No projects found for this category.</p>
                )}
            </ul>);
}