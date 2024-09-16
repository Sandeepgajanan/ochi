import Eye from "./Eye";

const Eyes = () => {
  return (
    <div className="eyes w-full h-screen overflow-hidden flex justify-center">
      <div
        data-scroll
        data-scroll-section
        data-scroll-speed="-.6"
        className="relative w-2/3  h-full bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg')]"
      >
        <div className=" absolute flex gap-10 top-[40%] left-1/2 -translate-x-[50%] -translate-y-[50%]">
          <Eye title={"Play"} />
          <Eye title={"Play"} />
        </div>
      </div>
    </div>
  );
};

export default Eyes;
