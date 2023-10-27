import { useDispatch, useSelector } from "react-redux";

import { getUserFetch } from "./slices/userSlice";

function App() {
  const myDispatch = useDispatch();
  const retrivedData = useSelector((state) => {
    return state.users;
  });
  console.log(retrivedData);
  return (
    <>
      <div className="App">
        <h1>Redux-Saga</h1>
        <button onClick={() => myDispatch(getUserFetch())}>Call API</button>
        <br />
        {retrivedData.isLoading ? (
          <h3>
            <i>Loading...</i>
          </h3>
        ) : (
          <div>
            {retrivedData &&
              retrivedData.users.map((user) => (
                <div key={user.id}>{user.name}</div>
              ))}
            {retrivedData?.users.error && <p>{retrivedData.error.message}</p>}
          </div>
        )}
      </div>
    </>
  );
}

export default App;
