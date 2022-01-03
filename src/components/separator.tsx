import '../styles/separator.scss';

export const Separator = ({ isFirst }: { isFirst?:boolean }) => {
  return <div className={`separator ${isFirst ? "separator--first" : ""}`}>
    <div className="separator__inner"></div>
  </div>
}