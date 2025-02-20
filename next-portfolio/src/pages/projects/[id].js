import ProjectDetails from '@/components/ProjectDetails';
import { useRouter } from 'next/router';

export default function ProjectDetailsId() {
    const router = useRouter();
    const { id } = router.query;
    const details = {
        id
    }
    return <ProjectDetails details={details}/>
}
