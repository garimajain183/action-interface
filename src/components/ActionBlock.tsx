import React from 'react';
import { ActionBlock as ActionBlockType, Action } from '../types';

interface ActionBlockProps {
  block: ActionBlockType;
  selectedAction: Action | null;
  setSelectedAction: React.Dispatch<React.SetStateAction<Action | null>>;
  setSelectedBlockId: React.Dispatch<React.SetStateAction<string | null>>;
  setState: React.Dispatch<React.SetStateAction<any>>;
}

const ActionBlock: React.FC<ActionBlockProps> = ({
  block,
  selectedAction,
  setSelectedAction,
  setSelectedBlockId,
  setState,
}) => {
  const addAction = () => {
    const newAction: Action = {
      id: `action-${Date.now()}`,
      type: 'text',
      content: '',
    };
    setState((prev: any) => ({
      ...prev,
      actionBlocks: prev.actionBlocks.map((b: any) =>
        b.id === block.id ? { ...b, actions: [...b.actions, newAction] } : b
      ),
    }));
  };

  return (
    <div className="action-block">
      <h4>Add Actions</h4>
      {block.actions.length === 0 ? (
        <div>No Actions</div>
      ) : (
        block.actions.map((action) => (
          <div
            key={action.id}
            className={`action-item ${
              selectedAction?.id === action.id ? 'highlight' : ''
            }`}
            onClick={() => {
              setSelectedAction(action);
              setSelectedBlockId(block.id);
            }}
          >
            {action.content || 'Empty Action'}
          </div>
        ))
      )}
      <button onClick={addAction}>Add Action</button>
    </div>
  );
};

export default ActionBlock;
