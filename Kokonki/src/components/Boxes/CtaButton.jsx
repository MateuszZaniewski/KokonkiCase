export default function CtaButton({ text, background, color }) {
  return (
    <button
      className={`${
        background ? background : "bg-[#FFFFFF]"
      } ${color} border-2 border-[#2A4746] rounded-full px-7 py-2 xl:min-w-[355px] hover:opacity-90 ${
        background === `bg-transparent`
          ? `hover:bg-[#2A4746] hover:text-white`
          : ``
      }`}
    >
      {text}
    </button>
  );
}
