import '../../styles/partials/inforcard.scss'

export const InfoCard = () => {

  return (
    <div className="container__inforcard">
      <div className="infocard__wrapper">
        <h4 className="infocard__title">Lorem ipsum </h4>
        <p className="infocard__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum mauris posuere fusce proin mattis. Hendrerit cras ut nunc enim dictum. Mattis proin ut quis donec sed eget nulla. Vel mi ut mauris integer. Nibh sagittis in lobortis sed cursus condimentum velit pharetra. Amet luctus ut vulputate scelerisque .
        </p>
      </div>
      <picture>
        <source srcSet="/imgs/banner-infocard-desktop.png" media="(min-width: 1024px)" />
        <img src="/imgs/banner-infocard-mobile.png" className="infocard__image" />
      </picture>
    </div>
  )
}