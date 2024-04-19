export default function Container({ children }) {
  return (
    <div className=" flex flex-col  gap-10 rounded-xl bg-mag md:basis-[70%] md:bg-white  md:px-20 md:pb-4 md:pt-12">
      {children}
    </div>
  );
}
