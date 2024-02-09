import styled from '@emotion/styled'

export const Co2TagContainer = styled.div`
  position: relative;
  width: fit-content;
  display: flex;
`

export const Co2TagItem = styled.div<{ positive: boolean }>`
  display: inline-flex;
  align-items: center;
  padding: 5px 10px;
  border-radius: 15px;
  font-size: 15;
  font-weight: bold;
  background-color: transparent;

  ${({ positive }) =>
    positive
      ? `
    background-color: #D9F3ED;
    color: #152A4C;
  `
      : `
    background-color: #FBD8D7;
    color: #152A4C;
  `}
`

export const Co2TagTextStyle = styled.span`
  margin-right: 5px;
`
