import arrowUpIcon from "../../assets/arrow-up.svg";
import arrowDownIcon from "../../assets/arrow-down.svg";
export default function Patterns({ visiblePage, setVisiblePage, product }) {
  console.log(product[0].patterns);
  return (
    <div
      onClick={() => setVisiblePage(4)}
      className="xl:w-[538px] border-b-2 border-black py-4"
    >
      <div className="flex justify-between">
        <span className="uppercase xl:text-[13px] font-bold">
          Wzory dla włóczki
        </span>
        <img src={visiblePage === 4 ? arrowUpIcon : arrowDownIcon} />
      </div>

      <div className={`${visiblePage === 4 ? "block" : "hidden"} pt-3 pl-5`}>
        <p className=" whitespace-pre-wrap">{}</p>
      </div>
    </div>
  );
}

{
  /* <a href="https://imgbb.com/"><img src="https://i.ibb.co/y0r9GzG/hat.png" alt="hat" border="0"></a>
<a href="https://imgbb.com/"><img src="https://i.ibb.co/N3wnrzX/socks.png" alt="socks" border="0"></a>
<a href="https://imgbb.com/"><img src="https://i.ibb.co/7SSdMHx/sweater.png" alt="sweater" border="0"></a> */
}
