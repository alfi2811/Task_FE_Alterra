import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

import storage from 'redux-persist/lib/storage';
import news from './news';
import main from './main';

const rootPersistConfig = {
  key: 'root',
  storage,
  whitelist: [''],
};

const mainPersistConfig = {
  key: 'main',
  storage: storage,  
};
const newsPersistConfig = {
  key: 'news',
  storage: storage,  
};

const rootReducer = combineReducers({  
  main: persistReducer(mainPersistConfig, main),  
  news: persistReducer(newsPersistConfig, news),  
});

export default persistReducer(rootPersistConfig, rootReducer);
