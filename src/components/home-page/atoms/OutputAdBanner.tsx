import { useEffect, useState } from "react";

export default function OutputAdBanner() {
  const [size, setSize] = useState<boolean>(false);

  useEffect(() => {
    const width = window.innerWidth;

    if (width > 640) setSize(true);
  }, []);

  return (
    <>
      {size ? (
        <div
          className="_fa7cdd4c68507744"
          data-zone="f4d7afa498d94df793c00f4d1c1ebfde"
          style={{ width: "468px", height: "60px" }}
        />
      ) : (
        <div
          className="_fa7cdd4c68507744"
          data-zone="196961007e564751aaf6adc5d603fda8"
          style={{ width: "234px", height: "60px" }}
        />
      )}
    </>
  );
}
