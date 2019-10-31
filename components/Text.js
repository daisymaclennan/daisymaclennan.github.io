import styled from 'styled-components'

const Text = styled.div`
  @media screen and (max-width: 800px){
    p + p{
      margin-top: 10px;
    }
  }

  @media screen and (min-width: 801px){
    p + p{
      margin-top: 15px;
    }
  }
`

export default Text
