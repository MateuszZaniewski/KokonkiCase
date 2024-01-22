import washIcons from "../../assets/wash.svg";
export default function DetailsSingleRow({ category, text, wash }) {
  if (category && category.length > 0 && text && text.length > 0 && !wash) {
    return (
      <div className="flex gap-2">
        <span className="w-1/2 text-right">{category}</span>
        <span className="w-1/2 text-left">{text}</span>
      </div>
    );
  }

  return (
    <div className="flex gap-2">
      <span className="w-1/2 text-right">{category}</span>
      <span className="w-1/2 text-left">
        {text}
        <img className="" src={wash && washIcons} />
      </span>
    </div>
  );
}
