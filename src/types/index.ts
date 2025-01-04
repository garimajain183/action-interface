export interface Action {
    id: string;
    type: 'text';
    content: string;
  }
  
  export interface ActionBlock {
    id: string;
    actions: Action[];
  }
  
  export interface State {
    actionBlocks: ActionBlock[];
  }
  