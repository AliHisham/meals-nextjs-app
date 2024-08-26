import MealsGrid from "@/components/MealsComponent/MealsGrid";
import { getMeals } from "@/lib/getMeals";
export default async function MealsHome() {
  const meals = await getMeals();

  return (
    <>
      <MealsGrid meals={meals} />
    </>
  );
}
