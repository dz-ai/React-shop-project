import styled from "styled-components";

export const imagUrl = `https://ik.imagekit.io/${process.env.REACT_APP_IMAGEKIT_KEY}/brick-wall-1.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1672948189856`;

export const AppStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  justify-content: space-between;
  background: url(${props => props?.url});
`;