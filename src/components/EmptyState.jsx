import React from 'react';
import { SearchX, RotateCcw } from 'lucide-react';
import './EmptyState.css';

export default function EmptyState({ 
  title = "No case studies found", 
  message = "Try adjusting your search query, selecting a different threat category, or resetting active filters.",
  onReset
}) {
  return (
    <div className="empty-state-card">
      <div className="empty-state-icon">
        <SearchX size={36} />
      </div>
      <h3 className="empty-state-title">{title}</h3>
      <p className="empty-state-msg">{message}</p>
      {onReset && (
        <button type="button" className="btn btn-secondary btn-sm" onClick={onReset}>
          <RotateCcw size={14} />
          Reset All Filters
        </button>
      )}
    </div>
  );
}
