import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "./redux/slices/getUsersSlice";
import { addUser } from "./redux/slices/userSlice";
import UserDate from "./components/UserDate";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/2")
      .then((response) => response.json())
      .then((data) => {
        if (data.length >= 2) {
          return dispatch(getUsers(data));
        }
        dispatch(getUsers([data])); //estos es para tener el estado de los datos obtenidos de la API
        //lo estpy probando con un solo id paro deberia fucionar igual con todos los datos obtenidos
        // dispatch(addUser(data)); //esto es para probar otro estado de usuarios
        //para un solo id y funciona bien
      });
  }, []);

  //console.log(users); //aquí está vacío
  return (
    <>
      <div className="container h-screen bg-slate-200 p-5 grid grid-cols-1 gap-4">
        <h1 className="text-black mb-4">Redux Toolkit Example</h1>
        {/* {users &&
          users.map(
            (data) => (
              console.log(data.id),
              (dispatch(addUser(data)),
              (
                <div key={data.id} className="text-black ">
                  <h2>User number</h2>
                  {data.id}
                </div>
              ))
            )
          )} */}
        <UserDate />
      </div>
    </>
  );
}

export default App;
