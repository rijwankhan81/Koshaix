import Image, { ImageProps } from "next/image";
import React, { FC, useState } from "react";

interface IProps extends ImageProps {
  src: string;
  alt: string;
}

const NextImage: FC<IProps> = ({ src, alt, ...rest }) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const handleLoad = ({ target }: React.SyntheticEvent<HTMLImageElement>) => {
    const { naturalWidth, naturalHeight } = target as HTMLImageElement;
    setDimensions({ width: naturalWidth, height: naturalHeight });
  };

  return (
    <Image
      src={src}
      alt={alt}
      width={dimensions.width}
      height={dimensions.height}
      unoptimized
      onLoad={handleLoad}
      {...rest}
    />
  );
};

export default NextImage;
