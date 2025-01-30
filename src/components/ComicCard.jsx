export default function card({ id, title, thumb, series }) {
  return (
    <li key={id} className="card">
      <a href="#">
        <div className="comic">
          <img src={thumb} alt={title} />
        </div>
        <h4>{series.toUpperCase()}</h4>
      </a>
    </li>
  );
}
