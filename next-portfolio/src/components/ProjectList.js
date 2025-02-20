import Link from 'next/link';

export default function ProjectList({ projects }) {
    return (
        <ul>
            {projects.length > 0 ? (
                projects.map((p) => (
                    <li key={p.id}>
                        <Link href={`/projects/${p.id}`}>
                            {p.title} ({p.type})
                        </Link>
                    </li>
                ))
            ) : (
                <p>No projects found for this category.</p>
            )}
        </ul>
    );
}
