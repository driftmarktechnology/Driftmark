function Sectionheader({title, subtitle}){
    return(
        <div className="section-title">
          <span>{title}</span>
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>
    )
}
export default Sectionheader;