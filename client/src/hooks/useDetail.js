import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import URLS from "../helpers/Urls";

const useDetail = () => {
  const [countryDetail, setCountryDetail] = useState({});
  const { idPais } = useParams();

  useEffect(() => {
    axios(`${URLS.COUNTRIES}/${idPais}`)
      .then(({ data }) => {
        setCountryDetail(data);
      })
      .catch((error) => {
        alert(error.message);
      });
  }, [idPais]);

  return countryDetail;
};

export default useDetail;
