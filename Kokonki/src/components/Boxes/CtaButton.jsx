export default function CtaButton({ text, background, color, task }) {
  return (
    <button
      onClick={task}
      className={`${
        background ? background : "bg-[#FFFFFF]"
      } ${color} rounded-full border-2 border-[#2A4746] px-7 py-2 hover:opacity-90 xl:min-w-[355px] ${
        background === `bg-transparent`
          ? `hover:bg-[#2A4746] hover:text-white`
          : ``
      }`}
    >
      {text}
    </button>
  );
}
