export default function BoxPlan({ children, classes = "" }) {
  return (
    <div
      className={`m-auto w-11/12 translate-y-[-60px] rounded-2xl bg-white px-6 py-7  md:m-0 md:h-[400px] md:w-auto md:translate-y-0 md:p-0 md:py-10 ${classes}`}
    >
      {children}
    </div>
  );
}
