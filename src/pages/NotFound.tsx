const NotFound = () => (
  <div
    style={{
      position: 'absolute',
      textAlign: 'center',
      top: '50%',
      transform: 'translateY(-50%)',
      width: '100%',
    }}
  >
    <h2>Oops! Looks like you are lost!</h2>
    <h3>Use the back button or click below.</h3>
    <a href="/" className="button marg-top-2">
      Take me home
    </a>
  </div>
)

export default NotFound
