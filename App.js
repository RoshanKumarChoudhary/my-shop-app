import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import MainNavigator from './navigation/MainNavigator';
import cartReducer from './store/reducers/cartItem';
import productReducer from './store/reducers/products';

const rootReducer = combineReducers({
  productReducer: productReducer,
  cartReducer : cartReducer
})

const store = createStore(rootReducer, composeWithDevTools());

export default function App() {
  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
