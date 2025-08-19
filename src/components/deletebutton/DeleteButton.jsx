import './DeleteButton.css';
import React, { useState } from 'react';

function DeleteButton({ creatorName, onDelete }) {
    const [showConfirm, setShowConfirm] = useState(false);
    const [deleting, setDeleting] = useState(false);

    async function handleDelete() {
        setDeleting(true);

        try {
            await onDelete()
        } catch (error) {
            console.error("Delete failed:", error);
            setDeleting(false);
            setShowConfirm(false);
            
        }
    }
    if (showConfirm) {
        return (
          <div className="delete-modal-overlay">
            <div className="delete-confirm-box">
              <h3>Delete Creator</h3>
              <p>Are you sure you want to delete <strong>"{creatorName}"</strong>?</p>
              <p className="warning-text">This action cannot be undone.</p>
              <div className="confirm-buttons">
                <button 
                  onClick={handleDelete}
                  disabled={deleting}
                  className="confirm-delete-btn"
                >
                  {deleting ? 'Deleting...' : 'Yes, Delete'}
                </button>
                <button 
                  onClick={() => setShowConfirm(false)}
                  disabled={deleting}
                  className="cancel-delete-btn"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        );
      }
    
      return (
        <button 
          onClick={() => setShowConfirm(true)}
          className="delete-button"
        >
          Delete
        </button>
      );
    
}

export default DeleteButton;