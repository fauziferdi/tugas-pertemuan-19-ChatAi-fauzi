import React from "react";

export default function ChatInput({ onSubmit, loading, onChange, query }) {
  return (
    <form
      onSubmit={onSubmit}
      className="fixed-bottom p-3 bg-primary-subtle border-top shadow"
    >
      <div className="input-group container">
        <input
          onChange={onChange}
          value={query}
          type="text"
          placeholder="Message Lumoshive Ai"
          className="form-control border border-primary"
          disabled={loading}
        />
        <button className="btn btn-primary" type="submit" disabled={loading}>
          <i className="bi bi-arrow-bar-up"></i> Send
        </button>
      </div>
    </form>
  );
}
