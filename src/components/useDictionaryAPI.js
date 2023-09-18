import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import keyboard from "./keybaord.json";

const useDictionaryAPI = () => {
  const [dicData, setDicData] = useState(keyboard);
  const [isloading, setIsLoading] = useState(false);
  const [iserror, setIsError] = useState(null);

  // const fetchData = async () => {
  //   setIsLoading(true);
  //   try {
  //     const respons = await axios.get(
  //       `https://api.dictionaryapi.dev/api/v2/entries/en/hello`
  //     );
  //     setDicData(respons.data);
  //     //console.log(respons);
  //     setIsLoading(false);
  //   } catch (error) {
  //     setIsError("no data", error);
  //   }
  // };
  // useEffect(() => {
  //   fetchData();
  // }, []);

  const searchWord = async (word) => {
    setIsLoading(true);
    try {
      const respons = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );
      setDicData(respons.data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsError("no data");
    }
  };

  return { dicData, searchWord };
};

export default useDictionaryAPI;
