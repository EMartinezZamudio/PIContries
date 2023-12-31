import { Link } from "react-router-dom";
import PATHROUTES from "../../helpers/PathRoutes.helpers";
import ActivityBox from "../ActivityBox/ActivityBox";
import { addActivities } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const Activities = () => {
  const activities = useSelector((state) => state.activities);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addActivities());
  }, [dispatch]);

  return (
    <section>
      <Link to={PATHROUTES.FORM}>
        <button>Crear</button>
      </Link>
      {activities.map((activity) => {
        return <ActivityBox key={activity.id} data={activity} />;
      })}
    </section>
  );
};

export default Activities;
