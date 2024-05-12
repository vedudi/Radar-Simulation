import axios from "axios";
import { useEffect, useState } from "react";
import { headers } from "../utils/api";
import formatDate from "../utils/formatDate";
import Loader from "./Loader";
import checkValid from "../utils/checkValid";
import { useDispatch } from "react-redux";
import { setPath } from "../redux/slices/flightSlice";

const Modal = ({ detailId, close }) => {
  const [detail, setDetail] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    setDetail(null);
    const params = {
      flight: detailId,
    };
    axios
      .get("https://flight-radar1.p.rapidapi.com/flights/detail", {
        params,
        headers,
      })
      .then((res) => {
        dispatch(setPath(res.data.trail));
        setDetail(res.data);
      });
  }, [detailId]);
  const date = new Date(
    detail.time.scheduled.departure * 1000
  ).toLocaleString();
  return (
    <div className="modal-outer">
      <div className="modal-inner">
        <div className="close-wrapper">
          <button onClick={close}>X</button>
        </div>
        {!detail ? (
          <Loader />
        ) : (
          <>
            <h2>{checkValid(detail.aircraft.model?.text)}</h2>
            <h2>{checkValid(detail.aircraft.model?.code)}</h2>
            <p>
              <span>kuyruk kodu</span>
              <span>
                <h2>{checkValid(detail.aircraft?.registration)}</h2>
              </span>
            </p>
            {detail.aircraft?.images?.large ? (
              <img src={detail.aircraft.images?.large[0].src} />
            ) : (
              <p>fotoğraf bulunamadı</p>
            )}
            <p>
              <span>şirket ismi:</span>
              <span>{checkValid(detail.airline?.short)}</span>
            </p>
            <p>
              <span>kalkış yeri</span>
              <a href={detail.airport?.origin?.website} target="_blank">
                {checkValid(detail.airport?.origin?.name)}
              </a>
            </p>
            <p>
              <span>iniş yeri</span>
              <a href={detail.airport?.destination?.website} target="_blank">
                {checkValid(detail.airport?.destination?.name)}
              </a>
            </p>
            <p>
              <span>kalkış zamanı:</span>
              <span>
                {detail.time.scheduled.departure > 0
                  ? formatDate(detail.time.scheduled.departure)
                  : "unknown"}
              </span>
            </p>
            <p>
              <span>iniş zamanı:</span>
              <span>
                {detail.time.scheduled.arrival > 0
                  ? formatDate(detail.time.scheduled.arrival)
                  : "unknown"}
              </span>
            </p>
            <p className={detail.status?.icon}>
              <span>{checkValid(detail.status?.text)}</span>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Modal;
