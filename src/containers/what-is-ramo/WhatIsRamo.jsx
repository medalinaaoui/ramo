const WhatGPT = () => {
  return (
    <section
      id="whatisramo"
      className=" scroll-smooth flex flex-col px-12 py-16 my-8 lg:mx-24 mx-8 gap-16 w-fit gb-what-is-gpt"
    >
      <article className="flex  justify-between md:flex-row flex-col gap-2">
        <h2 className="font-bold md:text-3xl text-2xl whitespace-nowrap w-1/3 relative line-above-head">
          What is Ramo?
        </h2>
        <p className="md:w-2/3 w-fit text-gray-400 md:text-base text-sm">
          Ramo is a digital marketing agency that helps businesses of all sizes
          grow their online presence and reach their target audience. We offer a
          wide range of services, including:
        </p>
      </article>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-8">
        <article className="flex flex-col md:gap-8 gap-2">
          <h3 className="font-bold text-lg w-fit relative line-above-head">
            Digital Marketing Alchemy
          </h3>
          <p className="md:text-base text-sm text-gray-400">
            Unleash the full potential of online advertising with our
            tailor-made digital marketing strategies, including SEO, PPC, social
            media, and email marketing.
          </p>
        </article>

        <article className="flex flex-col md:gap-8 gap-2">
          <h3 className="font-bold text-lg w-fit relative line-above-head">
            Logo Magic and Brand Wizardry
          </h3>
          <p className="md:text-base text-sm text-gray-400">
            Make a lasting mark with a captivating logo and a unified brand
            identity that roars your story.
          </p>
        </article>

        <article className="flex flex-col md:gap-8 gap-2">
          <h3 className="font-bold text-lg w-fit relative line-above-head">
            Social Media Symphony
          </h3>
          <p className="md:text-base text-sm text-gray-400">
            Let us orchestrate your social media presence, crafting spellbinding
            content and nurturing authentic connections with your audience.
          </p>
        </article>
      </div>
      <div className="flex md:flex-row flex-col justify-between">
        <h3 className="font-bold md:text-4xl text-2xl bg-that-i-want bg-clip-text text-transparent md:w-2/3 w-fit capitalize">
          creativity is the spark that ignites success
        </h3>
        <p className="text-yellow-600">Explore The Library</p>
      </div>
    </section>
  );
};
export default WhatGPT;
