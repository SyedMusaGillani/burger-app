import "./ingredientControl.css";

export default function IngredientControl({
  label,
  onLess,
  onMore,
  isDisabled,
}) {
  return (
    <div className="row m-0 justify-content-evenly px-5 my-2">
      <p className="col-2 fw-bold">{label}</p>
      <button className="col-2 btn-less" onClick={onLess} disabled={isDisabled}>
        Less
      </button>
      <button className="col-2 btn-more" onClick={onMore}>
        More
      </button>
    </div>
  );
}
