import React from "react";

interface TextFields {
  title: string;
  placeholder: string;
  paddingBottom?: number;
}

const TextFields: React.FC<TextFields> = (props) => {
  return (
    <div>
      <div className="mb-5">
        <div className="text-[#000000] font-medium">{props.title}</div>
        <input
          type="text"
          className={`text-[#9F9F9F] my-5 py-3 pl-3 border-2 border-[#9F9F9F] rounded-lg w-3/4 
          pb-${props.paddingBottom}`}
          placeholder={props.placeholder}
        />
      </div>
    </div>
  );
};

export default TextFields;
