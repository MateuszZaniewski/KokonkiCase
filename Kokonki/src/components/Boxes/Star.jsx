import starFillIcon from "../../assets/star-fill.svg";
import starEmptyIcon from "../../assets/star-empty.svg";
export default function Star({ rating }) {
  console.log(rating);
  return (
    <div className="flex xl:gap-[6px] items-center">
      {[...Array(rating)].map((e, i) => (
        <img key={i} src={starFillIcon} />
      ))}
      {[...Array(5 - rating)].map((e, i) => (
        <img key={i} src={starEmptyIcon} />
      ))}
      <span>{rating.toFixed(1)}</span>
    </div>
  );
}
