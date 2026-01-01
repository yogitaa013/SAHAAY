function ResourceCard({ resource, onBookmark }) {
  return (
    <div className="card">
      <h3>{resource.title}</h3>
      <p>{resource.description}</p>
      <p><strong>Category:</strong> {resource.category}</p>
      <p><strong>State:</strong> {resource.state}</p>

      <a href={resource.link} target="_blank" rel="noreferrer">
        Visit Website
      </a>

      <button onClick={() => onBookmark(resource)}>
        ⭐ Bookmark
      </button>
    </div>
  );
}

export default ResourceCard;
