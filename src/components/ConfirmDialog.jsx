export default function ConfirmDialog({ term, onConfirm, onCancel }) {
  return (
    <div className="modal-overlay" onClick={onCancel}>
      <div className="modal" onClick={(e) => e.stopPropagation()} style={{ maxWidth: 400 }}>
        <div className="modal-header">
          <h3>Delete Entry</h3>
          <button className="modal-close" onClick={onCancel}>
            &times;
          </button>
        </div>
        <div className="modal-body">
          <div className="confirm-dialog">
            <p>
              Are you sure you want to delete <strong>"{term}"</strong>? This cannot be undone.
            </p>
            <div className="form-actions">
              <button className="btn btn-secondary" onClick={onCancel}>
                Cancel
              </button>
              <button
                className="btn btn-primary"
                style={{ background: 'var(--color-danger)' }}
                onClick={onConfirm}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
