export const LoadingIcon = ({
  className,
  height,
  width,
}: {
  className?: string;
  height?: string;
  width?: string;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      className={className}
      viewBox="0 0 24 24"
    >
      <circle cx={4} cy={12} r={3} fill="currentColor">
        <animate
          id="svgSpinners3DotsBounce0"
          attributeName="cy"
          begin="0;svgSpinners3DotsBounce1.end+0.25s"
          calcMode="spline"
          dur="0.6s"
          keySplines=".33,.66,.66,1;.33,0,.66,.33"
          values="12;6;12"
        ></animate>
      </circle>
      <circle cx={12} cy={12} r={3} fill="currentColor">
        <animate
          attributeName="cy"
          begin="svgSpinners3DotsBounce0.begin+0.1s"
          calcMode="spline"
          dur="0.6s"
          keySplines=".33,.66,.66,1;.33,0,.66,.33"
          values="12;6;12"
        ></animate>
      </circle>
      <circle cx={20} cy={12} r={3} fill="currentColor">
        <animate
          id="svgSpinners3DotsBounce1"
          attributeName="cy"
          begin="svgSpinners3DotsBounce0.begin+0.2s"
          calcMode="spline"
          dur="0.6s"
          keySplines=".33,.66,.66,1;.33,0,.66,.33"
          values="12;6;12"
        ></animate>
      </circle>
    </svg>
  );
};

export const PlaneIcon = ({
  className,
  height,
  width,
}: {
  className?: string;
  height?: string;
  width?: string;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      className={className}
      viewBox="0 0 16 16"
    >
      <path
        fill="currentColor"
        d="M13.2 7h-2.47l-3.7-5.75a.534.534 0 0 0-.964.436l1.43 5a.25.25 0 0 1-.24.319h-4.07l-1.19-1.78a.5.5 0 0 0-.416-.223h-.039a.5.5 0 0 0-.475.658L1.847 8l-.78 2.34a.5.5 0 0 0 .474.658h.039a.5.5 0 0 0 .416-.223l1.19-1.78h4.07a.25.25 0 0 1 .24.319l-1.43 5a.534.534 0 0 0 .964.436L10.73 9h2.47c.749 0 1.49-.12 2.2-.356l.224-.074c.548-.182.548-.957 0-1.14l-.224-.075A7 7 0 0 0 13.2 7"
      ></path>
    </svg>
  );
};
