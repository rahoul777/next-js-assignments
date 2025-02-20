import { useRouter } from 'next/router';
import Link from 'next/link';
import ProjectList from '@/components/ProjectList';

const projects = [
    { id: 1, title: 'Project Alpha', type: 'web' },
    { id: 2, title: 'Project Beta', type: 'mobile' },
    { id: 3, title: 'Project Gamma', type: 'web' },
    { id: 4, title: 'Project Delta', type: 'AI' },
];

export default function Projects() {
    const router = useRouter();
    const { type } = router.query;

    // Filter projects by type
    const filteredProjects = type
        ? projects.filter((project) => project.type === type)
        : projects;

    // Handle filtering with shallow routing
    // const handleFilter = (filterType) => {
    //     router.push({
    //         pathname: '/projects',
    //         query: filterType ? { type: filterType } : {},
    //     }, undefined, { shallow: true });
    // };

    return (
        <div>
            <h2>Projects</h2>

            {/* Filter Buttons */}
            {/* <div>
                <button onClick={() => handleFilter('')}>All</button>
                <button onClick={() => handleFilter('web')}>Web</button>
                <button onClick={() => handleFilter('mobile')}>Mobile</button>
                <button onClick={() => handleFilter('AI')}>AI</button>
            </div> */}

            {/* Filter Links */}
            <div>
                <Link 
                    href="/projects" 
                    legacyBehavior
                >
                    <a className={!type ? 'active-filter' : ''}>All</a>
                </Link> |{" "}
                <Link 
                    href={{ pathname: '/projects', query: { type: 'web' } }} 
                    shallow
                    legacyBehavior
                >
                    <a className={type === 'web' ? 'active-filter' : ''}>Web</a>
                </Link> |{" "}
                <Link 
                    href={{ pathname: '/projects', query: { type: 'mobile' } }} 
                    shallow
                    legacyBehavior
                >
                    <a className={type === 'mobile' ? 'active-filter' : ''}>Mobile</a>
                </Link> |{" "}
                <Link 
                    href={{ pathname: '/projects', query: { type: 'AI' } }} 
                    shallow
                    legacyBehavior
                >
                    <a className={type === 'AI' ? 'active-filter' : ''}>AI</a>
                </Link>
            </div>

            {/* Project List Component */}
            <ProjectList projects={filteredProjects} />
        </div>
    );
}
