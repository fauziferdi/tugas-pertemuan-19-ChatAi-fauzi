import React from "react";
import Markdown from "react-markdown";

export default function ChatMessage({ message, query }) {
  return (
    <div className="container ">
      <div className="d-flex justify-content-end chat-message-cstm">
        <div className="p-3 border-sm  bg-warning-subtle text-end rounded-user-cstm">
          <i className="bi bi-person-circle me-2"></i>
          <strong>Question : </strong>
          {query}
        </div>
      </div>

      <div className="d-flex justify-content-start chat-message-cstm">
        <div className="p-3 border shadow-sm  bg-primary-subtle rounded-ai-cstm">
          <i className="bi bi-robot me-2"></i>
          <strong>Answer</strong>
          <div>
            <Markdown>{message}</Markdown>
          </div>
        </div>
      </div>
    </div>
  );
}
