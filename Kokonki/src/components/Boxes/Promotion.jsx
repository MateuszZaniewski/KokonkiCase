export default function Promotion({ text, visible }) {
  if (visible) {
    return (
      <div className="w-fit rounded-xl bg-[#821232] px-[10px] py-[2px] uppercase text-white">
        {text}
      </div>
    );
  }
}
