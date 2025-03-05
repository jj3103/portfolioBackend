

import { useEffect, useState } from "react";
import { fetchProjects } from "../../services/api";
import ProjectCard from "./ProjectCard";

const ProjectList = ({ projects }) => {
    const [allProjects, setAllProjects] = useState([]);

    useEffect(() => {
        if (!projects) {
            fetchProjects().then((data) => {
                console.log("Fetched projects:", data);
                setAllProjects(data ?? [])
            });
        }
    }, [projects]);

    const displayedProjects = projects ?? allProjects ?? []; // Use projects if available, otherwise fallback to allProjects

    return (
        <div className="mt-6">
            {displayedProjects?.length > 0 ? (
                <div className="space-y-4">
                    {displayedProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            ) : (
                <div className="text-center text-gray-500">
                    <h1>No projects found</h1>
                </div>
            )}
        </div>
    );
};

export default ProjectList;
