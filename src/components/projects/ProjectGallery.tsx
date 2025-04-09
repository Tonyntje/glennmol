import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  images: string[];
  date: string;
  location: string;
}

interface ProjectGalleryProps {
  projects: Project[];
  selectedCategory: string;
}

export default function ProjectGallery({ projects, selectedCategory }: ProjectGalleryProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState<Project | null>(null);
  const [photoIndex, setPhotoIndex] = useState(0);

  const handleOpenLightbox = (project: Project, index: number) => {
    setCurrentProject(project);
    setPhotoIndex(index);
    setIsOpen(true);
  };

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {filteredProjects.map((project) => (
        <div key={project.id} className="group">
          <div className="relative overflow-hidden rounded-lg shadow-md">
            <div
              className="aspect-video bg-gray-200 bg-cover bg-center cursor-pointer"
              style={{ backgroundImage: `url(${project.images[0]})` }}
              onClick={() => handleOpenLightbox(project, 0)}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity">
              <div>
                <p className="text-sm font-semibold text-primary-200">{project.category}</p>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm">{project.description}</p>
              </div>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-4 gap-2">
            {project.images.slice(1, 5).map((image, index) => (
              <div
                key={index}
                className="aspect-square bg-gray-200 bg-cover bg-center rounded cursor-pointer"
                style={{ backgroundImage: `url(${image})` }}
                onClick={() => handleOpenLightbox(project, index + 1)}
              />
            ))}
          </div>
        </div>
      ))}

      {currentProject && (
        <Lightbox
          open={isOpen}
          close={() => setIsOpen(false)}
          index={photoIndex}
          slides={currentProject.images.map(src => ({ src }))}
        />
      )}
    </div>
  );
}