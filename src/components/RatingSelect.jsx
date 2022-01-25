import { InputRating } from "./shared/InputRating";

export function RatingSelect({ range, handleSelect, rating }) {
  const handleChange = (e) => {
    handleSelect(+e.currentTarget.value); //setRating change for current target.value and change rating
  };

  return (
    <ul className="rating">
      {Array.from(Array(range)).map((_, i) => (
        <InputRating
          key={i + 1}
          label={i + 1}
          value={i + 1}
          onChange={handleChange}
          checked={rating === i + 1} //checked selected if rating === index+1
        />
      ))}
    </ul>
  );
}

export default RatingSelect;
