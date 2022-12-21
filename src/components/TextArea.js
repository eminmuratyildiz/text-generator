import { useSelector } from "react-redux";

function TextArea() {
  const { text } = useSelector((state) => state.data);
  return (
    <div className="w-full py-16 px-8 my-6 bg-[#303030] rounded-md">{text}</div>
  );
}

export default TextArea;
