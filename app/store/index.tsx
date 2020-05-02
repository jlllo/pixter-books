import { createStore, Store } from 'redux';
import { AppState } from './ducks/BooksData/types';
import rootReducer from './ducks/rootReducer';

const store: Store<AppState> = createStore(rootReducer);

export default store;
