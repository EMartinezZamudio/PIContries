import { Link } from "react-router-dom";
import PATHROUTES from "../../helpers/PathRoutes.helpers";
import ActivityBox from "../ActivityBox/ActivityBox";
import { addActivities } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import ActivitiesHeader from "../ActivitiesHeader/ActivitiesHeader";

// estilos
import {
  wrapperActivities,
  divBtn,
  divActivities,
} from "./Activities.module.css";

const Activities = () => {
  const activities = useSelector((state) => state.activities);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addActivities());
  }, [dispatch]);

  return (
    <section className={wrapperActivities}>
      <div className={divBtn}>
        <Link to={PATHROUTES.FORM}>
          <button>Crear</button>
        </Link>
      </div>
      <ActivitiesHeader />
      <div className={divActivities}>
        {activities.map((activity) => {
          return <ActivityBox key={activity.id} data={activity} />;
        })}
      </div>
    </section>
  );
};

export default Activities;
