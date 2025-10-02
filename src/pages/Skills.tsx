
const Skills = () => {
  return (
    <section id="skills" className="py-16 px-6 bg-gray-100 dark:bg-gray-800">
      <h3 className="text-3xl font-bold text-center mb-10">Skills</h3>
      <div className="flex flex-wrap justify-center gap-4">
        {["React", "TypeScript", "JavaScript", "Tailwind", "APIs", "Git"].map(
          (skill) => (
            <span
              key={skill}
              className="px-4 py-2 rounded-full bg-blue-500 text-white text-sm shadow"
            >
              {skill}
            </span>
          )
        )}
      </div>
    </section>
  );
};

export default Skills;
