const LINKS = [
  { href: 'https://www.facebook.com/eidetus', icon: 'facebook' },
  { href: 'https://www.instagram.com/eidetus/', icon: 'instagram' },
  { href: 'https://twitter.com/eidetus', icon: 'twitter' },
  { href: 'https://www.youtube.com/channel/UCfYoz2i0xDxTJ7hoYtRK5Tw', icon: 'youtube' },
  { href: 'https://www.reddit.com/r/Eidetus/', icon: 'reddit' },
]

const SocialLinks = () => (
  <div className="marg-bottom-2 text-center">
    <ul className="buttons">
      {LINKS.map((link) => (
        <li key={link.icon}>
          <a className="footer__social-link" target="_blank" href={link.href}>
            <img src={`/img/icon-social-${link.icon}.png`} />
          </a>
        </li>
      ))}
    </ul>
  </div>
)

export default SocialLinks
