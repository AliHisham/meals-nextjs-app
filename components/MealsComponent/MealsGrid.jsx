import MealsCard from "./MealsCard";
import MealsGridStyling from "./meals.module.css";

const MealsGrid = ({ meals }) => {
  return (
    <div className={MealsGridStyling.mealsWrapper}>
      {meals &&
        meals.map((meal) => {
          return <MealsCard key={meal.id} {...meal} />;
        })}
    </div>
  );
};

export default MealsGrid;
