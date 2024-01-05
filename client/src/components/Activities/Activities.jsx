// modulos
import { Link } from "react-router-dom";
import { addActivities } from "../../redux/actions";
import PATHROUTES from "../../helpers/PathRoutes.helpers";

// hooks
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// componentes
import ActivityBox from "../ActivityBox/ActivityBox";
import ActivitiesHeader from "../ActivitiesHeader/ActivitiesHeader";

// estilos
import {
  wrapperActivities,
  divBtn,
  divActivities,
  divActivitiesNull,
} from "./Activities.module.css";

const Activities = () => {
  const activities = useSelector((state) => state.activities);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addActivities());
  }, [dispatch, activities]);

  return (
    <section className={wrapperActivities}>
      <div className={divBtn}>
        <Link to={PATHROUTES.FORM}>
          <button>Crear</button>
        </Link>
      </div>
      <ActivitiesHeader />
      {!activities[0] && (
        <div className={divActivitiesNull}>No Hay Actividades Creadas</div>
      )}
      <div className={divActivities}>
        {activities.map((activity) => {
          return <ActivityBox key={activity.id} data={activity} />;
        })}
      </div>
    </section>
  );
};

export default Activities;
