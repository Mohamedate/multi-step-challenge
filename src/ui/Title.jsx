import UpAnim from "../components/UpAnim";

export default function Title({ children, head }) {
  return (
    <UpAnim>
      <div className=" mb-8">
        <h1 className=" mb-2 text-3xl font-bold text-marin-blue">{head}</h1>
        <p className="text-cool-gray">{children}</p>
      </div>
    </UpAnim>
  );
}
