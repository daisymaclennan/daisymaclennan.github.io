import styled from 'styled-components'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Navigation = ({className}) => {
  const router = useRouter()
  var activeRoute = "personal-statement"
  switch(router.pathname){
    case "/":
      activeRoute = "personal-statement"
      break
    case "/my-work":
      activeRoute = "my-work"
      break
    case "/qualifications":
      activeRoute = "qualifications"
      break
    case "/contact-details":
      activeRoute = "contact-details"
      break
  }
  return(
    <nav className={className}>
      <ul>
        <button onClick={(e) => e.target.classList.toggle("open")}>
          <svg width="62" height="18" viewBox="0 0 62 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M39.3155 9.12903C39.3155 13.4804 35.7959 17 31.4445 17C27.0931 17 23.5735 13.4804 23.5735 9.12903C23.5735 4.77764 27.0931 1.25806 31.4445 1.25806C35.7959 1.25806 39.3155 4.77764 39.3155 9.12903ZM45.2581 9.12903C45.2581 4.77764 48.7777 1.25806 53.1291 1.25806C57.4805 1.25806 61.0001 4.77764 61.0001 9.12903C61.0001 13.4804 57.4805 17 53.1291 17C48.7777 17 45.2581 13.4804 45.2581 9.12903ZM1.88892 9.12903C1.88892 4.77764 5.4085 1.25806 9.75989 1.25806C14.1113 1.25806 17.6309 4.77764 17.6309 9.12903C17.6309 13.4804 14.1113 17 9.75989 17C5.4085 17 1.88892 13.4804 1.88892 9.12903Z" stroke="white" strokeWidth="2"/>
          </svg>
        </button>
        <li className={activeRoute === "personal-statement" ? "link--active" : "link--inactive"}>
          <Link href="/">
            <a >
              <h3>
                personal statement
              </h3>
            </a>
          </Link>
        </li>
        <li className={activeRoute === "my-work" ? "link--active" : "link--inactive"}>
          <Link href="/my-work">
            <a>
              <h3>
                my work
              </h3>
            </a>
          </Link>
        </li>
        <li className={activeRoute === "qualifications" ? "link--active" : "link--inactive"}>
          <Link href="/qualifications">
            <a>
              <h3>
                qualifications
              </h3>
            </a>
          </Link>
        </li>
        <li className={activeRoute === "contact-details" ? "link--active" : "link--inactive"}>
          <Link href="/contact-details">
            <a >
              <h3>
                contact details
              </h3>
            </a>
          </Link>
        </li>

      </ul>

    </nav>
  )
}

const StyledNavigation = styled(Navigation)`
  ul {
    margin-top: 0;
  }
  a{
    display: block;
  }
  .link--active h3 {
    font-weight: bold;
  }
  @media screen and (max-width: 800px) {
    position: relative;
    .link--inactive {
      display: none;
      opacity: 0.9;
    }
    .link--active {
      width: fit-content;
    }
    .link--active h3, .link--inactive h3{
      pointer-events: none;
      margin-top: 10px;
      margin-bottom: 10px;
    }
    button{
      background: transparent;
      border: 0;
      position: absolute;
      padding: 0;

      top: 8px;
      right: 0;
    }
    svg{
      pointer-events: none;
    }
    .open ~ li{
      display: block!important;
    }
  }
  @media screen and (min-width: 801px){
    button{
      display: none;
    }
  }
  @media screen and (min-width: 801px) and (max-width: 1440px){
    min-width: 355px;

    .link--active {
      background-image: url("../../static/bullet.svg");
      background-size: 20px;
      background-repeat: no-repeat;
      background-position: 0px 10px;
      padding-left: 40px;
    }
    h3 {
      margin-bottom: 15px;
    }
  }
  @media screen and (min-width: 1441px) {
    min-width: 532px;

    .link--active {
      background-image: url("../../static/bullet.svg");
      background-repeat: no-repeat;
      background-position: 0px 15px;
      padding-left: 45px;
    }
    h3 {
      margin-bottom: 25px;
    }
  }
  @media screen and (min-width: 801px) {
    h3 {
      margin-top: 0;
    }
  }
`

export default StyledNavigation
