export default function CtaButton({ text, background }) {
  const ground = "bg-[#2A4746]";
  return (
    <button
      className={`${
        background ? ground : ""
      } text-[#F9F8F9] border-2 border-[#2A4746] rounded-full px-7 py-2 xl:min-w-[355px]`}
    >
      {text}
    </button>
  );
}
