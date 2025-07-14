export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React", level: 70 },
        { name: "Next.js", level: 85 },
        { name: "TypeScript", level: 50 },
        { name: "Tailwind CSS", level: 65 },
        { name: "JavaScript", level: 70 },
        { name: "HTML/CSS", level: 98 },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 60 },
        { name: "Python", level: 75 },
        { name: "PostgreSQL", level: 70 },
        { name: "MongoDB", level: 65 },
        { name: "REST APIs", level: 60 },
        { name: "GraphQL", level: 60 },
      ],
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git", level: 60 },
        { name: "Docker", level: 70 },
        { name: "AWS", level: 65 },
        { name: "Vercel", level: 70 },
        { name: "Figma", level: 75 },
        { name: "VS Code", level: 65 },
      ],
    },
    {
      title: "English Skills",
      skills: [
        { name: "Reading", level: 85 },
        { name: "Writing", level: 80 },
        { name: "Listening", level: 90 },
        { name: "Speaking", level: 75 },
      ],
    },
  ];

  return (
    <div className="bg-blue-200 min-h-screen w-full">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Skills</h1>
        <p className="text-xl text-gray-600">Technologies and tools I work with</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm border p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">{category.title}</h2>
            <div className="space-y-4">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700 font-medium">{skill.name}</span>
                    <span className="text-gray-500 text-sm">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Always Learning</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto">
          Technology evolves rapidly, and I&apos;m committed to continuous learning. I regularly explore new frameworks,
          attend conferences, and work on personal projects to stay current with industry trends and best practices.
        </p>
        <div className="flex flex-wrap justify-center gap-3 mt-6">
          <span className="bg-white px-4 py-2 rounded-full text-sm text-gray-700 shadow-sm">
            Currently Learning: AI/ML
          </span>
          <span className="bg-white px-4 py-2 rounded-full text-sm text-gray-700 shadow-sm">Next: Rust</span>
          <span className="bg-white px-4 py-2 rounded-full text-sm text-gray-700 shadow-sm">Exploring: Web3</span>
        </div>
      </div>
    </div>
  );
}
