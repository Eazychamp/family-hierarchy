import './App.css';
import { useDispatch, useSelector } from "react-redux";
import Home from './Home';
import  AlertBox  from './components/SnackBar/SnackBar';

function App() {
  const snackbarState = useSelector(state => {
    return state.snackbarState;
  });
  console.log('snackbarState: ', snackbarState);
  return (
    <>
    <Home />
    {snackbarState.open && <AlertBox {...snackbarState} />}
    </>
  );
}

export default App;
