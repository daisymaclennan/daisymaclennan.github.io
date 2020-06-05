import styled from 'styled-components'

const ContactField = styled.div`
  h5 {
    margin-top: 0;
    margin-bottom: 10px;
    opacity: 0.8;
  }
  h3 {
    margin-top: 0;
    margin-bottom: 0;
  }
  svg{
    height: 15px;
    margin-left: 15px;
    padding-top: 4px;
  }
  a{
    display: flex;
    align-items: center;
  }
  @media screen and (max-width: 800px) {
    margin-bottom: 25px;
    h3 {
      padding-left: 0px;
      font-size: 20px;
    }
    h5{
      margin-bottom: 0px;
    }
  }
  @media screen and (min-width: 801px) {
    h3 {
      font-weight: bold;

    }
    a{
      margin-left: 40px;
      margin-bottom: 30px;
    }
  }
`

export default ContactField
