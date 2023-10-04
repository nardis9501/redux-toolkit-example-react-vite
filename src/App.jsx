import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUsers } from "./redux/slices/getUsersSlice";
import UserDate from "./components/UserDate";

function App() {
  const dispatch = useDispatch();

  const persistanceState = localStorage.getItem(
    "redux_state-users_persitanceLocalSotarage"
  );
  console.log(persistanceState);

  useEffect(() => {
    if (!persistanceState) {
      fetch("https://jsonplaceholder.typicode.com/users/")
        .then((response) => response.json())
        .then((data) => {
          return dispatch(getUsers(data));
        })
        .catch((error) => {
          console.log(error);
          throw Error(error);
        });
    }
  }, []);

  return (
    <>
      <div className="container  h-screen bg-slate-200 p-5">
        <UserDate />
      </div>
    </>
  );
}

export default App;
