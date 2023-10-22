import pic1 from "../../assests/Rectangle 22.png";
import pic2 from "../../assests/Rectangle 22-1.png";
import pic3 from "../../assests/Rectangle 22-2.png";
import pic4 from "../../assests/Rectangle 22-3.png";
import pic5 from "../../assests/Rectangle 22-4.png";
import { Artical } from "../../componants";

const Blog = () => {
  return (
    <section className="py-8 lg:px-24 px-8 flex flex-col gap-8">
      <h1 className="md:text-5xl text-3xl font-bold bg-that-i-want bg-clip-text text-transparent w-fit md:w-1/2 my-4 mb-10">
        A lot is happening, We are blogging about it.
      </h1>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
        <Artical
          image={pic5}
          title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          addClassName="row-span-2  h-auto"
        />
        <Artical
          image={pic2}
          title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
        />
        <Artical
          image={pic3}
          title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
        />
        <Artical
          image={pic4}
          title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
        />
        <Artical
          image={pic1}
          title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
        />
      </div>
    </section>
  );
};
export default Blog;
