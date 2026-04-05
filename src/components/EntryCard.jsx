export default function EntryCard({ entry, categoryLabel, onEdit, onDelete }) {
  return (
    <div className="entry-card">
      <div className="entry-card-header">
        <div className="entry-term">{entry.term}</div>
        <div className="entry-actions">
          <button className="btn btn-sm btn-secondary" onClick={() => onEdit(entry)}>
            Edit
          </button>
          <button className="btn btn-sm btn-danger" onClick={() => onDelete(entry)}>
            Delete
          </button>
        </div>
      </div>
      {categoryLabel && <div className="entry-category-badge">{categoryLabel}</div>}
      <div className="entry-definition">{entry.definition}</div>
      <div className="entry-example">{entry.example}</div>
    </div>
  );
}
