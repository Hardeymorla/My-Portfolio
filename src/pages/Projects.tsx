import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { projects } from "../../data/project";

const Project = () => {
  return (
    <section id="projects" className="py-16 px-6">
      <h3 className="text-3xl font-bold text-center mb-10">Projects</h3>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <Card key={idx} className="shadow-lg rounded-2xl overflow-hidden">
            <img
              src={project.image}
              alt={project.name}
              className="h-40 w-full object-cover"
            />
            <CardContent className="p-4">
              <h4 className="text-xl font-semibold mb-2">{project.name}</h4>
              <p className="mb-4">{project.description}</p>
              <div className="flex gap-2">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="sm" className="cursor-pointer">
                    Live
                  </Button>
                </a>
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="sm"
                    variant="outline"
                    className="cursor-pointer"
                  >
                    GitHub
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Project;
