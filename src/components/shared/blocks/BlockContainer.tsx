import React from "react";
import { BlockKind } from "shared/types";

function getAttributesFromBlockKind(kind: BlockKind) {
  switch (kind) {
    case BlockKind.Starter: {
      return ["bg-yellow-600", false, true];
    }
    case BlockKind.Filter: {
      return ["bg-purple-600", true, true];
    }

    case BlockKind.Subject: {
      return ["bg-red-600", true, true];
    }

    case BlockKind.Group: {
      return ["bg-green-600", true, true];
    }

    case BlockKind.Operation: {
      return ["bg-blue-600", true, true];
    }

    case BlockKind.Sort: {
      return ["bg-pink-500", true, true];
    }
  }
}

function TopBlockIndent(props: { className?: string }) {
  return (
    <svg
      viewBox="0 0 10 1"
      className={`h-1.5 text-gray-800 fill-current stroke-0 ${
        props.className || ""
      }`}
    >
      <polygon points="0,0 2,0 3,1 7,1 8,0 10,0 10,1, 0,1" />
    </svg>
  );
}

function BottomBlockIndent(props: { className?: string }) {
  return (
    <svg
      viewBox="0 0 10 1"
      className={`h-1.5 text-gray-800 fill-current ${props.className || ""}`}
    >
      <polygon points="2,0 3,1 7,1 8,0" />
    </svg>
  );
}

export default function BlockContainer(props: {
  children: React.ReactChild | React.ReactChild[];
  kind: BlockKind;
  onClick?: () => any | ((e: React.MouseEvent<HTMLInputElement>) => any);
  className?: string;
  disabled?: boolean;
}) {
  const [bgColor, topIndent, bottomIndent] = getAttributesFromBlockKind(
    props.kind
  );

  function handleClick() {
    if (!props.disabled && props.onClick) {
      props.onClick();
    }
  }

  return (
    <div
      className={`min-w-0 relative table select-none ${
        topIndent ? "-mt-1" : ""
      } ${props.className ? props.className : ""} ${
        props.disabled ? "cursor-not-allowed" : "cursor-pointer"
      }`}
      onClick={handleClick}
      tabIndex={0}
    >
      {topIndent && <TopBlockIndent />}
      <div
        className={`bg-gray-800 text-sm ${
          props.disabled ? "text-gray-500" : "text-white"
        } p-2 rounded-r flex-shrink-0 flex items-center whitespace-nowrap`}
      >
        <div className={`${bgColor} w-2 h-2 rounded-full inline-block mr-2`} />
        <div className="flex items-center">{props.children}</div>
      </div>
      {bottomIndent && <BottomBlockIndent />}
    </div>
  );
}
