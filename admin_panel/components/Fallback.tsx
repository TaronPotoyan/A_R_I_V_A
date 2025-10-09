export default function Fallback() {
  return (
    <div className="fallback">
      <div className="fallback__card">
        <div className="fallback__spinner"></div>
        <h2 className="fallback__title">Loading...</h2>
        <p className="fallback__text">Please wait while we fetch your data.</p>
      </div>
    </div>
  );
}
