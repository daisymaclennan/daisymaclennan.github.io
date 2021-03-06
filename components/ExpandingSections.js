import styled from 'styled-components'

const ExpandingSections = styled.div`
.expandingSection--child {
  display: none;
}
.open ~ div {
  display: block !important;
  margin-top: 20px;
}
.open > svg {
  transform: rotate(180deg);
}

.link--icon > * {
  pointer-events: none;
}

@media screen and (max-width: 800px) {
  .expandingSection + .expandingSection {
    margin-top: 20px;
  }
  .open ~ div {
    margin-top: 15px;
  }
}
@media screen and (min-width: 801px) and (max-width: 1440px) {
  .expandingSection + .expandingSection {
    margin-top: 20px;
  }
  .expandingSection {
    width: calc(100vw - 435px);
  }
}
@media screen and (min-width: 1441px) {
  .expandingSection + .expandingSection {
    margin-top: 20px;
  }
  .expandingSection {
    width: calc(100vw - 672px);
  }
}

/*Slick slides*/
.slick-list{
  padding-top: 10px;
  padding-bottom: 10px;
}
.slick-slide img{
  width: 95%;
  object-fit: cover;
  cursor: pointer;
}
.slick-dots button::before{
  color: white;
}
.slick-dots li.slick-active button:before{
  opacity: 1;
  color: white;
}
@media screen and (max-width: 800px){
  .slick-slide img {
    height: 30vw;
  }
}

@media screen and (min-width: 801px) and (max-width: 1400px){
  .slick-slide img {
    height: 20vw;
  }
}

@media screen and (min-width: 1401px){
  .slick-slide img {
    height: 20vw;
  }
}
`

export default ExpandingSections
