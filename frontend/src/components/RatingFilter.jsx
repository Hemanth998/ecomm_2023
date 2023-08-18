const RatingFilter = ({ changeProducts }) => {
  return (
    <div>
      <input
        className="radio-rating"
        type="radio"
        name="ratingfilter"
        value="4"
        onChange={changeProducts}
      />{' '}
      4 or above
      <input
        className="radio-rating"
        type="radio"
        name="ratingfilter"
        value="3"
        onChange={changeProducts}
      />{' '}
      3 or above
      <input
        className="radio-rating"
        type="radio"
        name="ratingfilter"
        value="2"
        onChange={changeProducts}
      />{' '}
      2 or above
      <input
        className="radio-rating"
        type="radio"
        name="ratingfilter"
        value="1"
        onChange={changeProducts}
      />{' '}
      1 or above
    </div>
  );
};
export default RatingFilter;
