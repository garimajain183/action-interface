import React, { useState } from 'react';
import Layout from './components/Layout';
import { State, ActionBlock } from './types';
import './styles.css';

const App: React.FC = () => {
  const [state, setState] = useState<State>({ actionBlocks: [] });

  const addBlock = () => {
    const newBlock: ActionBlock = {
      id: `block-${Date.now()}`,
      actions: [],
    };
    setState((prev) => ({
      ...prev,
      actionBlocks: [...prev.actionBlocks, newBlock],
    }));
  };

  const globalSave = () => {
    console.log('Saved JSON:', JSON.stringify(state, null, 2));
  };

  return (
    <>
      <header>
        <button onClick={addBlock}>Add Action Block</button>
        <button onClick={globalSave}>Global Save</button>
      </header>
      <div className="container">
        <Layout state={state} setState={setState} />
      </div>
    </>
  );
};

export default App;
