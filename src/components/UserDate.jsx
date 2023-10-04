import { useDispatch, useSelector } from "react-redux";

import {
  deleteUserById,
  filterUserbyName,
  getUsers,
} from "../redux/slices/getUsersSlice";
export default function UserDate() {
  const { users } = useSelector((state) => state.users);
  console.log(users);
  const dispatch = useDispatch();

  const handlerDelete = (id) => {
    dispatch(deleteUserById(id));
  };

  const handlerOnChange = (e) => {
    console.log(e.target.value);
    const value = e.target.value;
    if (value === "") return dispatch(getUsers(users));
    dispatch(filterUserbyName(value));
  };

  // if (users === null) {
  //   return <h2 className="w-screen">Loading ...</h2>;
  // }
  const mapUsers = () => {
    if (users.length >= 1) {
      return users;
    } else if (users.length === 0) {
      console.log("User no found");
      return null;
    }

    return [users];
  };
  return (
    <>
      <h1 className="text-black md:text-5xl sm:text-3xl text-xl mb-5">
        Redux Toolkit Example
      </h1>
      <div className="overflow-x-auto h-5/6 w-full shadow-md sm:rounded-lg  bg-white dark:bg-gray-800 p-4">
        <div className="flex p-1 items-center justify-between pb-4 bg-white dark:bg-gray-900">
          <div>
            <button
              id="dropdownActionButton"
              data-dropdown-toggle="dropdown"
              className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              type="button"
            >
              <span className="sr-only">Action button</span>
              Action
              <svg
                className="w-2.5 h-2.5 ml-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            {/* <!-- Dropdown menu --> */}
            <div
              id="dropdownAction"
              className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
            >
              <ul
                className="py-1 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownActionButton"
              >
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Reward
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Promote
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Activate account
                  </a>
                </li>
              </ul>
              <div className="py-1">
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Delete User
                </a>
              </div>
            </div>
          </div>
          <label htmlFor="table-search" className="sr-only">
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              onChange={handlerOnChange}
              type="text"
              id="table-search-users"
              className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search for users"
            />
          </div>
        </div>
        <table className="w-full  text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="checkbox-all-search" className="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Contact
              </th>
              <th scope="col" className="px-6 py-3">
                Website
              </th>

              <th scope="col" className="px-6 py-3">
                Company
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {users === null ? (
              <tr>
                <h2 className="grid place-content-center w-full text-2xl">
                  Loading ...
                </h2>
              </tr>
            ) : mapUsers() === null ? (
              <tr>
                <td>
                  <h2 className="uppercase text-xl">User no found</h2>
                </td>
              </tr>
            ) : (
              mapUsers().map((user) => {
                const { name } = user;
                const { email } = user;
                const { username } = user;
                const { website } = user;
                const { phone } = user;
                const { company } = user;
                const { address } = user;

                const { id } = user;
                const companyName = company.name;
                return (
                  <tr
                    key={id}
                    className="bg-white border-b  dark:border-gray-700 dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    <td className="w-4 p-4">
                      <div className="flex items-center">
                        <input
                          id="checkbox-table-search-3"
                          type="checkbox"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          htmlFor="checkbox-table-search-3"
                          className="sr-only"
                        >
                          checkbox
                        </label>
                      </div>
                    </td>

                    {/* ID */}
                    <td className="px-6 py-4">{id}</td>

                    {/* Name, username and avatar*/}

                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <div className="flex items-center">
                        <img
                          className="w-10 h-10 rounded-full"
                          src="/docs/images/people/profile-picture-4.jpg"
                          alt={`${username} image`}
                        />
                        <div className="pl-3">
                          <div className="text-base font-semibold">{name}</div>
                          <div className="font-normal text-gray-500">
                            {username}
                          </div>
                        </div>
                      </div>
                    </th>

                    {/* Contact */}

                    <td className="px-2 py-2">
                      <div scope="col" className="px-2 py-1">
                        Email: {email}
                      </div>
                      <div scope="col" className="px-2 py-1">
                        Phone: {phone}
                      </div>
                      <div scope="col" className="px-2 py-1">
                        Address: {`${address.street} street,`}
                        <br />
                        {`${address.suite}, ${address.city}, ${address.zipcode}`}
                      </div>
                    </td>

                    {/* Website */}
                    <td className="px-6 py-4">{website}</td>

                    {/* Company */}
                    <td className="px-6 py-4">{companyName}</td>

                    <td className="px-6 py-4">
                      <a
                        href="#"
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Edit user
                      </a>
                      <button onClick={() => handlerDelete(id)}>delete</button>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
