import styled from 'styled-components';

export const CategoryContainer = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
column-gap: 20px;
row-gap: 50px;
`

export const CategoryTitle = styled.h2`
color:white;
font-size: 28px;
margin-bottom: 25px;
text-align: center;
`
export const CategoryTitleContainer = styled.div`
border-radius: 4px;
width: 200px;
margin: auto;
text-align: center;
background-color:black;
`
export const CardShadow = styled.div`
box-shadow: 0 25px 8px 0 rgba(0, 0, 0, 0.5), 0 29px 15px 0 rgba(0, 0, 0, 0.19);
`
export const ContainerShadow = styled.div`
  margin-bottom: 50px;
  margin-left: 30px;
  margin-right: 30px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 3px;
  padding-bottom: 35px;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`
