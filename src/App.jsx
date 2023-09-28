import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUsers } from "./redux/slices/getUsersSlice";
import UserDate from "./components/UserDate";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/")
      .then((response) => response.json())
      .then((data) => {
        return dispatch(getUsers(data));
      })
      .catch((error) => {
        console.log(error);
        throw Error(error);
      });
  }, []);

  return (
    <>
      <div className="container h-screen bg-slate-200 p-5 grid grid-cols-1 gap-4">
        <h1 className="text-black mb-4">Redux Toolkit Example</h1>

        <UserDate />
      </div>
    </>
  );
}

export default App;
