export default function CtaButton({ text, background, color }) {
  const ground = "bg-[#2A4746]";
  return (
    <button
      className={`${
        background ? ground : "bg-[#FFFFFF]"
      } ${color} border-2 border-[#2A4746] rounded-full px-7 py-2 xl:min-w-[355px]`}
    >
      {text}
    </button>
  );
}
