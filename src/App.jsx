import Menu from "./Components/Menu";
import NewProject from "./Components/NewProject";
import NoProject from "./Components/NoProject";
import SelectedProject from "./Components/SelectedProject";
import { useState } from "react";

function App() {
  const [projects, setProjects] = useState({
    selectedProjectId: null,
    projectsList: [],
  });

  function handleSave(project) {
    setProjects((prevState) => {
      const projectId = Math.random();
      const newProject = {
        ...project,
        id: projectId,
      };
      return {
        ...prevState,
        projectsList: [...prevState.projectsList, newProject],
        selectedProjectId: projectId,
      };
    });
  }

  function handleShowActiveProject(id) {
    setProjects((prevState) => ({
      ...prevState,
      selectedProjectId: id,
    }));
  }

  const selectedProject = projects.projectsList.find(
    (project) => project.id === projects.selectedProjectId,
  );

  function handleCancelProject() {
    setProjects((prevState) => ({
      ...prevState,
      selectedProjectId: null,
    }));
  }

  function handleCreateNewProject() {
    setProjects((prevState) => ({
      ...prevState,
      selectedProjectId: undefined,
    }));
  }

  let content;

  if (projects.selectedProjectId === null) {
    content = <NoProject handleCreate={handleCreateNewProject} />;
  } else if (projects.selectedProjectId === undefined) {
    content = (
      <NewProject handleCancel={handleCancelProject} onSave={handleSave} />
    );
  } else if (selectedProject) {
    content = <SelectedProject data={selectedProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Menu
        handleCreate={handleCreateNewProject}
        onSelectProject={handleShowActiveProject}
        projects={projects}
      />
      {content}
    </main>
  );
}

export default App;
