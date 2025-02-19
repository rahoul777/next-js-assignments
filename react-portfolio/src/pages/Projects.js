import { Link, useLocation } from "react-router-dom";

const projects = [
    { id: 1, title: "Project Alpha", type: "web" },
    { id: 2, title: "Project Beta", type: "mobile" },
    { id: 3, title: "Project Gamma", type: "web" },
    { id: 4, title: "Project Delta", type: "AI" },
];

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function Projects() {
    const query = useQuery();
    const filterType = query.get("type"); // Extract query param (e.g., 'web')

    // Filter projects based on type
    const filteredProjects = filterType
        ? projects.filter((project) => project.type === filterType)
        : projects;

    return (
        <div>
            <h2>Projects</h2>

            {/* Filtering Links */}
            <div>
                <Link to="/projects">All</Link> |{" "}
                <Link to="/projects?type=web">Web</Link> |{" "}
                <Link to="/projects?type=mobile">Mobile</Link> |{" "}
                <Link to="/projects?type=AI">AI</Link>
            </div>

            {/* Project List */}
            <ul>
                {filteredProjects.length > 0 ? (
                    filteredProjects.map((p) => (
                        <li key={p.id}>
                            <Link to={`/projects/${p.id}`}>{p.title} ({p.type})</Link>
                        </li>
                    ))
                ) : (
                    <p>No projects found for this category.</p>
                )}
            </ul>
        </div>
    );
}

export default Projects;