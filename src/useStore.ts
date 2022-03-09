import { useContext } from 'react';

import { StoreContext } from './MainPageStore';

const useStore = () => useContext(StoreContext);

export default useStore;
