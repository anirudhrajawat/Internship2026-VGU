function Footer() {
  const links = [
    'Help', 'Status', 'About', 'Careers', 'Press',
    'Blog', 'Privacy', 'Rules', 'Terms', 'Text to speech'
  ]

  return (
    <footer>
      {links.map((link) => (
        <a href="#" key={link}>{link}</a>
      ))}
    </footer>
  )
}

export default Footer
