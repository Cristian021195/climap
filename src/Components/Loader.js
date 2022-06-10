export function Loader() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{ margin: "auto" }}
      width="200"
      height="200"
      display="block"
      preserveAspectRatio="xMidYMid"
      viewBox="0 0 100 100"
    >
      <circle
        cx="50"
        cy="50"
        r="0"
        fill="none"
        stroke="#e90c59"
        strokeWidth="2"
      >
        <animate
          attributeName="r"
          begin="0s"
          calcMode="spline"
          dur="1s"
          keySplines="0 0.2 0.8 1"
          keyTimes="0;1"
          repeatCount="indefinite"
          values="0;40"
        ></animate>
        <animate
          attributeName="opacity"
          begin="0s"
          calcMode="spline"
          dur="1s"
          keySplines="0.2 0 0.8 1"
          keyTimes="0;1"
          repeatCount="indefinite"
          values="1;0"
        ></animate>
      </circle>
      <circle
        cx="50"
        cy="50"
        r="0"
        fill="none"
        stroke="#46dff0"
        strokeWidth="2"
      >
        <animate
          attributeName="r"
          begin="-0.5s"
          calcMode="spline"
          dur="1s"
          keySplines="0 0.2 0.8 1"
          keyTimes="0;1"
          repeatCount="indefinite"
          values="0;40"
        ></animate>
        <animate
          attributeName="opacity"
          begin="-0.5s"
          calcMode="spline"
          dur="1s"
          keySplines="0.2 0 0.8 1"
          keyTimes="0;1"
          repeatCount="indefinite"
          values="1;0"
        ></animate>
      </circle>
    </svg>
  );
}