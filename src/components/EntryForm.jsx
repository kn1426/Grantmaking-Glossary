import { useState } from 'react';

export default function EntryForm({ entry, categories, onSave, onClose }) {
  const [term, setTerm] = useState(entry?.term || '');
  const [category, setCategory] = useState(entry?.category || categories[0].id);
  const [definition, setDefinition] = useState(entry?.definition || '');
  const [example, setExample] = useState(entry?.example || '');

  const handleSubmit = () => {
    if (!term.trim() || !definition.trim()) return;
    onSave({
      term: term.trim(),
      category,
      definition: definition.trim(),
      example: example.trim(),
    });
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>{entry ? 'Edit Entry' : 'Add New Entry'}</h3>
          <button className="modal-close" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="modal-body">
          <div className="form-group">
            <label>Term or Phrase</label>
            <input
              type="text"
              value={term}
              onChange={(e) => setTerm(e.target.value)}
              placeholder="e.g., Theory of Change"
              autoFocus
            />
          </div>
          <div className="form-group">
            <label>Category</label>
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
              {categories.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.icon} {c.label}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>Definition</label>
            <textarea
              value={definition}
              onChange={(e) => setDefinition(e.target.value)}
              placeholder="A clear, concise definition…"
              rows={3}
            />
          </div>
          <div className="form-group">
            <label>Example Sentence</label>
            <textarea
              value={example}
              onChange={(e) => setExample(e.target.value)}
              placeholder="Use it in a realistic work context…"
              rows={3}
            />
          </div>
          <div className="form-actions">
            <button className="btn btn-secondary" onClick={onClose}>
              Cancel
            </button>
            <button
              className="btn btn-primary"
              onClick={handleSubmit}
              disabled={!term.trim() || !definition.trim()}
            >
              {entry ? 'Save Changes' : 'Add Entry'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
