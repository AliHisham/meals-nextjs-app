import MealCardStyling from "./meals.module.css";
import Image from "next/image";

const MealsCard = ({
  slug,
  title,
  image,
  summary,
  instructions,
  creator,
  creator_email,
}) => {
  console.log(slug, title, "just testing something!");
  return (
    <div className={MealCardStyling.mealsWrapper}>
      <div className={MealCardStyling["mealsCardWrapper"]}>
        <Image src={image} alt={title} width={120} height={70} />
        <h2>{title}</h2>
        <p>{summary}</p>
      </div>
    </div>
  );
};

export default MealsCard;
