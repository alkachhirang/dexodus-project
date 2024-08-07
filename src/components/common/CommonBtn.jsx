import { CommonButtonArrow } from "./Icons";

const CommonBtn = ({ text, showSvg, width }) => {
  return (
    <button
      aria-label="button"
      className="bg-cover group bg-no-repeat transition-all duration-300 ease-linear font-syne text-base shadow-[0px_8px_20px_0px_#D0215D66] text-white button-gradient px-[26.1px] py-3 rounded-[130px] flex items-center"
      style={{ width }}
    >
      {text}
      {showSvg ? (
        <span className="ml-[10px] group-hover:translate-x-2 transition-all duration-300 ease-linear">
          <CommonButtonArrow />
        </span>
      ) : null}
    </button>
  );
};

export default CommonBtn;
