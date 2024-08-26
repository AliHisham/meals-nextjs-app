export default function DynamicMeals(props) {
  console.log(
    props,
    "just checking the slug and where is it going to be printed!"
  );
  const { params, searchParams } = props;
  console.log(params, "params", searchParams);
  return <h1>Dynamic meals</h1>;
}
