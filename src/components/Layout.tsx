import React, { useState } from 'react';
import ActionBlock from './ActionBlock';
import TextFieldAction from './TextFieldAction';
import { State, ActionBlock as ActionBlockType, Action } from '../types';

interface LayoutProps {
  state: State;
  setState: React.Dispatch<React.SetStateAction<State>>;
}

const Layout: React.FC<LayoutProps> = ({ state, setState }) => {
  const [selectedAction, setSelectedAction] = useState<Action | null>(null);
  const [selectedBlockId, setSelectedBlockId] = useState<string | null>(null);

  /**
   * Updates the selected action's content in the state.
   * @param updatedAction - The updated action object with new content.
   */
  const handleSaveAction = (updatedAction: Action) => {
    setState((prev) => ({
      ...prev,
      actionBlocks: prev.actionBlocks.map((block) => {
        if (block.id === selectedBlockId) {
          return {
            ...block,
            actions: block.actions.map((action) =>
              action.id === updatedAction.id ? updatedAction : action
            ),
          };
        }
        return block;
      }),
    }));
    setSelectedAction(updatedAction); // Keep the action selected after saving
  };

  return (
    <div className="container">
        {/* Left Panel */}
        <div className="left-panel">
            {state.actionBlocks.map((block) => (
            <ActionBlock
                key={block.id}
                block={block}
                selectedAction={selectedAction}
                setSelectedAction={setSelectedAction}
                setSelectedBlockId={setSelectedBlockId}
                setState={setState}
            />
            ))}
        </div>

        {/* Right Panel */}
        <div className="right-panel">
            {selectedAction ? (
            <TextFieldAction action={selectedAction} onSave={handleSaveAction} />
            ) : (
            <p>Select an action to edit.</p>
            )}
        </div>
        </div>



  );
};

export default Layout;
