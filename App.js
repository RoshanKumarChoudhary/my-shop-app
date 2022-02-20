import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import MainNavigator from './navigation/MainNavigator';
import productReducer from './store/reducers/products';


const rootReducer = combineReducers({
  productReducer: productReducer
})

const store = createStore(rootReducer);

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
