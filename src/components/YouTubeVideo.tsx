import React from "react";

export interface YouTubeVideoProps {
  src: string;
  width?: number;
  height?: number;
  title?: string;
}

export default function YouTubeVideo({src, width, height, title}: YouTubeVideoProps): JSX.Element {
  return (
    <iframe
      width={width ?? 560}
      height={height ?? 315}
      src={src}
      title={title ?? "YouTube video player"}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  );
}
