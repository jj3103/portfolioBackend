const API_URL = import.meta.env.VITE_API_URL || "http://localhost:1337";

const ProjectCard = ({ project }) => {
    return (

        <div className="bg-white shadow-md rounded-lg overflow-hidden flex w-full sm:w-[90%] md:w-[75%] lg:w-[65%] max-w-[1000px] h-auto sm:h-[160px] relative">
            <img
                src={API_URL + (project.image?.url || "/placeholder.jpg")}
                alt={project.title}
                className="w-[100px] sm:w-[140px] md:w-[120px] lg:w-[250px] h-auto object-cover"
            />

            {/* Card Content */}
            <div className="flex-1 px-4 flex flex-col justify-between py-2">
                <div>
                    <h3 className="text-lg font-semibold">{project.title}</h3>
                    <p className="text-gray-500 text-sm">{project.description}</p>
                    <p className="text-xs text-gray-400 mt-1">{project.language}</p>
                    <p className="text-xs text-gray-400">By {project.author}</p>
                </div>

                <button className="bg-orange-400 text-white font-medium 
                        w-[100px] h-[30px] text-xs 
                        sm:w-[110px] sm:h-[35px] sm:text-sm 
                        md:w-[120px] md:h-[40px] md:text-base 
                        rounded-[5px] border border-gray-300 shadow-sm self-end mt-2">
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProjectCard;

