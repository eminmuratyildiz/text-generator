import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getText } from "../redux/textSlice";

function Form() {
  const [paras, setParas] = useState(4);
  const [format, setFormat] = useState("text");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getText({ paras, format }));
  }, [paras, format, dispatch]);
  return (
    <form>
      <div className="flex space-x-5 items-center">
        <div>
          <label>Paragraphs</label>
          <br />
          <input
            value={paras}
            onChange={(e) =>
              e.target.value > 0
                ? setParas(Number(e.target.value))
                : setParas(1)
            }
            type="number"
            className="text-[#444] p-1"
          />
        </div>
        <div>
          <label>Include HTML</label>
          <br />
          <select
            onChange={(e) => setFormat(e.target.value)}
            className="py-[6px] px-3 text-[#444] rounded border"
            value={format}
          >
            <option value="text">No</option>
            <option value="html">Yes</option>
          </select>
        </div>
      </div>
    </form>
  );
}

export default Form;
