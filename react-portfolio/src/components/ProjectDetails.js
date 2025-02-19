import { useParams } from 'react-router-dom';

function ProjectDetails() {
    const { id } = useParams();
    return <h2>Details for Project {id}</h2>;
}
export default ProjectDetails;