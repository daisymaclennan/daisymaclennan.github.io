import styled from 'styled-components'

const IconLink = styled.button`
  /*Icon links*/
  .link--icon {
    font-family: Raleway;
    letter-spacing: 0.04em;
    color: white;
    background-color: black;
    border: 0;
    display: flex;
    align-items: center;
    padding-left: 0;
    letter-spacing: 0.04em;
  }
  .link--icon > svg {
    fill: white !important;
    width: 16px;
    margin-left: 15px;
  }
`

export default IconLink
