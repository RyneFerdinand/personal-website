import './SectionTitle.css'

export default function SectionTitle({ title, type }) {
  const modifier = type === "dark" ? "--dark" : "";
  return (
    <div className={`section-title section-title${modifier}`}>
      <hr className="section-title__first-line" />
      <h1>{title}</h1>
      <hr className="section-title__second-line" />
    </div>
  );
}
