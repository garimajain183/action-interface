import React, { useState, useEffect } from 'react';
import { Action } from '../types';

interface TextFieldActionProps {
  action: Action;
  onSave: (updatedAction: Action) => void;
}

const TextFieldAction: React.FC<TextFieldActionProps> = ({ action, onSave }) => {
  const [content, setContent] = useState(action.content);

  // Synchronize the textarea with the selected action's content
  useEffect(() => {
    setContent(action.content);
  }, [action]);

  const handleSave = () => {
    onSave({ ...action, content });
  };

  return (
    <div>
      <h4>Text Area Action</h4>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Enter your text here..."
      />
      <button onClick={handleSave} style={{ marginTop: '10px' }}>
        Save
      </button>
    </div>
  );
};

export default TextFieldAction;
