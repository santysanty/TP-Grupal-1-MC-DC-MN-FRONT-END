// src/pages/MemberPage.jsx

import { useParams } from 'react-router-dom';
import { teamMembersDetails } from '../data/teamMembersDetails';

const MemberPage = () => {
  const { id } = useParams(); // capturamos el parámetro de la URL
  const member = teamMembersDetails.find(member => member.id === id);

  if (!member) {
    return <div className="p-4 text-red-600">Miembro no encontrado.</div>;
  }

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <img
          src={member.imageUrl}
          alt={`Foto de ${member.fullName}`}
          className="w-40 h-40 rounded-full border-4 border-blue-500 object-cover"
        />
        <div>
          <h1 className="text-3xl font-bold">{member.fullName}</h1>
          <p className="text-lg text-gray-600">{member.role}</p>
          <p className="mt-4">{member.bio}</p>
        </div>
      </div>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-2">Habilidades</h2>
        <ul className="list-disc pl-5 space-y-1">
          {member.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-2">Proyectos</h2>
        <ul className="space-y-4">
          {member.projects.map((project, index) => (
            <li key={index}>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline font-medium"
              >
                {project.name}
              </a>
              <p className="text-gray-700">{project.description}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-2">Tecnologías</h2>
        <div className="flex flex-wrap gap-4">
          {member.technologies.map((tech, index) => (
            <div key={index} className="flex items-center space-x-2">
              <img src={tech.icon} alt={tech.name} className="w-6 h-6" />
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MemberPage;
