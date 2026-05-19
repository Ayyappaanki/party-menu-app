import "./index.css";
const BottomBar = ({ selectedCount }) => {
  return (
    <div className="bottom-bar">
      <p>
        Total Selected:
        {selectedCount}
      </p>

      <button className="continue-btn">Continue</button>
    </div>
  );
};

export default BottomBar;
