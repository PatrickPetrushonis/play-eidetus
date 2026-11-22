type ContentBannerProps = {
  name: string
  description: string
  flip?: boolean
  image?: string
  subname?: string
}

// Banner with a heading, a description and an optional background image.
const ContentBanner = ({ name, description, flip, image, subname }: ContentBannerProps) => (
  <div
    className={`banner__content${flip ? ' banner__content--flip' : ''}${image ? ` banner__content--${image}` : ''}`}
  >
    <div className="banner__inner">
      <h3 className={`text-upper${subname ? ' marg-bottom-0' : ''}`}>
        <strong>{name}</strong>
      </h3>
      {subname ? <small className="opacity-50">{subname}</small> : null}
      <p>{description}</p>
    </div>
    <div className="banner__content--background"></div>
  </div>
)

export default ContentBanner
