import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const CategoryPreviewContainer = styled.div`
 display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  margin-left: 30px;
  margin-right: 30px;
  padding-left: 10px;
  padding-right: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`
// color: #0000EE;

export const CategoryTitleContainer = styled.div`
border-radius: 4px;
width: 200px;
margin: auto;
text-align: center;
background-color:black;
`

export const CategoryTitle = styled(Link)`
  color: white;
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;
`

export const CategoryHeading = styled.h2`

`

export const PreviewItems = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 30px;
  margin-bottom: 30px;
`