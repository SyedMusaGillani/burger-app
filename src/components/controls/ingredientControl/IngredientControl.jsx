
export default function IngredientControl({label, onLess, onMore}){
  return (
    <div className="row m-0 justify-content-center">
      <p className='col-2'>{label}</p>
      <button className='col-2' onClick={onLess}>Less</button>
      <button className='col-2' onClick={onMore}>More</button>
    </div>
  );
}