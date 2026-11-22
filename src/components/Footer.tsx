const Footer = () => (
  <div id="footer" className="footer">
    <div>
      <small className="text-upper">
        © <span>{new Date().getFullYear()}</span>{' '}
        <a href="https://www.expletivestudios.com" target="_blank">
          Expletive Studios
        </a>
        . All rights reserved.
      </small>
    </div>
  </div>
)

export default Footer
