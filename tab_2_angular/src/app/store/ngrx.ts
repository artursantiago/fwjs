import { createAction, props } from '@ngrx/store';

enum ActionTypes {
  ChangeTab = 'ChangeTab',
  SetTabs = 'SetTabs',
}

export type Tab = {
  title: string;
  content: string;
};

export type AppStore = {
  tabs: Tab[];
  selectedTabIndex: number;
  selectedTab: Tab;
};

export const changeTab = createAction(
  ActionTypes.ChangeTab,
  props<{ index: number }>()
);

export const setTabs = createAction(
  ActionTypes.SetTabs,
  props<{ tabs: Tab[] }>()
);

const INITIAL_STATE: AppStore = {
  tabs: [
    {
      content: 'Sem Conteúdo',
      title: 'Tab',
    },
  ],
  selectedTabIndex: 0,
  selectedTab: {
    content: 'Sem Conteúdo',
    title: 'Tab',
  },
};

export const reducer = (state: AppStore = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case ActionTypes.ChangeTab:
      return {
        ...state,
        selectedTabIndex: action.index,
        selectedTab: getSelectedTab(state, action.index),
      };
    case ActionTypes.SetTabs:
      const newTabs =
        action.tabs?.length > 0 ? action.tabs : INITIAL_STATE.tabs;
      return {
        ...state,
        tabs: newTabs,
        selectedTabIndex: 0,
        selectedTab: newTabs[0],
      };
    default:
      return state;
  }
};

function getSelectedTab(state: AppStore, newIndex: number = 0) {
  return state.tabs.filter((_, index) => index === newIndex)?.[0];
}
