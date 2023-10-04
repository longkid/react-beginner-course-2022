import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

export const Home = () => {
  const {
    data: catData,
    isLoading,
    refetch,
  } = useQuery(["cat"], () => {
    return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
  });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1>THIS IS THE HOME PAGE</h1>
      <p>{catData?.fact}</p>
      <button onClick={() => refetch()}>Update data</button>
    </div>
  );
};
