import starFillIcon from "../../assets/star-fill.svg";
import starEmptyIcon from "../../assets/star-empty.svg";
export default function Star({ rating }) {
  return (
    <div className="flex xl:gap-[6px] gap-2 py-1 xl:py-0 items-center">
      {[...Array(Math.round(rating))].map((e, i) => (
        <img key={i} src={starFillIcon} />
      ))}
      {[...Array(5 - Math.round(rating))].map((e, i) => (
        <img key={i} src={starEmptyIcon} />
      ))}
      <span>{Math.round(rating).toFixed(1)}</span>
    </div>
  );
}
