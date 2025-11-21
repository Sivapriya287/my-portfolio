function ProjectCard({ project, onSelect }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm">
        <div className="card-body">
          <h5 className="card-title fw-bold">{project.title}</h5>
          <p className="card-text">{project.shortDesc}</p>

          <button
            className="btn btn-primary"
            onClick={() => onSelect(project)}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
