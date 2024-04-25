import membership from "/image-membership.png";

export const BecomeMember = () => {
  return (
    <section className="my-12  bg-peach" >
      <div className=" flex flex-col align-center justify-center mx-auto md:flex-row  gap-8 items-center  px-14 py-20 ">
          <img className="rounded-full rounded-b-none w-64 md:w-350 2xl:w-500" src={membership} alt="membership-image" />
        <div className="flex flex-col gap-8 final-cta-content text-center md:w-350 2xl:w-500">
          <h3 className="text-3xl font-bold">Det handlar om dig</h3>
          <p className="max-w-xs">
            Ditt välmående är våran prioritet. Gå med i Studio Mama&apos;s
            community och stärk din kropp och ditt sinne!
          </p>
          <button className=" text-black font-bold bg-coral mx-auto font-zilla hover:bg-hoverCoral hover:text-whiteText text-24 px-4 md:px-7 py-2 rounded-lg 2xl:text-36">Bli medlem idag</button>
        </div>
      </div>
    </section>
  );
};
