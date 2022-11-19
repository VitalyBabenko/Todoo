import ContentLoader from "react-content-loader";
import "./Tasks.scss";

const TasksLoader = () => {
  return (
    <div className="tasks">
      <ContentLoader
        speed={2}
        width={679}
        height={385}
        viewBox="0 0 679 385"
        backgroundColor="#f3f3f3"
        foregroundColor="#fdd3d3"
      >
        <rect x="1" y="0" rx="8" ry="8" width="119" height="30" />
        <rect x="1" y="58" rx="8" ry="8" width="655" height="39" />
        <rect x="1" y="137" rx="8" ry="8" width="28" height="28" />
        <rect x="47" y="146" rx="7" ry="7" width="225" height="14" />
        <rect x="47" y="190" rx="7" ry="7" width="310" height="14" />
        <rect x="47" y="364" rx="7" ry="7" width="297" height="14" />
        <rect x="47" y="234" rx="7" ry="7" width="164" height="14" />
        <rect x="47" y="278" rx="7" ry="7" width="257" height="14" />
        <rect x="46" y="322" rx="7" ry="7" width="370" height="14" />
        <rect x="1" y="181" rx="8" ry="8" width="28" height="28" />
        <rect x="1" y="225" rx="8" ry="8" width="28" height="28" />
        <rect x="1" y="269" rx="8" ry="8" width="28" height="28" />
        <rect x="1" y="313" rx="8" ry="8" width="28" height="28" />
        <rect x="0" y="357" rx="8" ry="8" width="28" height="28" />
      </ContentLoader>
    </div>
  );
};

export default TasksLoader;
