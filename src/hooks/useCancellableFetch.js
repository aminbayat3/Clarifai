import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { customFetch } from "../utils/fetch-utility-functions";

import { UserContext } from "../context/user.context";

export const useCancellableFetch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { setCurrentUser } = useContext(UserContext);
  const navigate = useNavigate(); // i think we need to use this cutome hook inside a memoized component then use the compoennt itself
  const [cancellableFetch, abort] = customFetch();

  const authenticate = (url, option, body) => {
    if (body) {
      try {
        setIsLoading(true);

        //IIFE (Imediately Invoked Function Expression)
        (async () => {
          const response = await cancellableFetch(url, option);
          const user = await response.json();
          if (user.id) {
            setCurrentUser(user);
            option.method === "post" && navigate("/facedetector");
          } else {
            alert("WRONG CREDENTIALS!");
          }
          setIsLoading(false);
        })();
      } catch (error) {
        error.name === "AbortError"
          ? console.log("Request Aborted!")
          : console.log("failed to fetch data!!", error);
      }
    }
  };

  return [isLoading, authenticate, abort];
};
