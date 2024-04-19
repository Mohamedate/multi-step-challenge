import { AnimatePresence } from "framer-motion";
import UpAnim from "../../components/UpAnim";

export default function Input({ label, error, children }) {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <label className=" mb-2">{label}</label>
        <AnimatePresence>
          {error ? (
            <UpAnim>
              <span className=" text-sm text-red-500">{error}</span>
            </UpAnim>
          ) : null}
        </AnimatePresence>
      </div>
      {children}
    </div>
  );
}
