export default function Promotion({ text, visible }) {
  if (visible) {
    return (
      <div className="bg-[#821232] rounded-xl px-[10px] py-[2px] text-white uppercase w-fit">
        {text}
      </div>
    );
  }
}
