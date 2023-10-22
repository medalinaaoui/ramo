import { format } from "date-fns";

const Artical = ({ image, title, addClassName }) => {
  const formattedDate = format(new Date(), "MMM dd, yyyy");

  return (
    <article
      className={`flex flex-col justify-between items-start gap-4 bg-[#042C54] h-[25rem] ${addClassName}`}
    >
      <div>
        <img src={image} alt="image" className="w-full" />
        <div className="mt-8 px-8 h-1/3 grid grid-cols-1 justify-items-start gap-4">
          <span className="text-sm">{formattedDate}</span>
          <h1 className="font-bold text-xl leading-5">{title}</h1>
        </div>
      </div>
      <button className="px-8 mb-8 text-sm">Read Full Artical</button>
    </article>
  );
};
export default Artical;
