import styled from "styled-components";

type DirectoryItemImage = {
  imageUrl: string;
};

export const BackgroundImage = styled.div<DirectoryItemImage>`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${(props) => `url(${props.imageUrl})`};
`;

export const Body = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  border-radius: 15px;
  background-color: white;
  ${"" /* background-color: #e7c5c5dc; */}
  ${
    "" /* background-image: url("https://img.freepik.com/free-photo/white-leather-texture-close-up_268835-1357.jpg?w=2000"); */
  }
    opacity: 0.9;
  position: absolute;

  h2 {
    font-weight: bold;
    margin: 0 6px 0;
    font-size: 22px;
    color: #4a4a4a;
    text-transform: uppercase;
  }

  p {
    font-weight: lighter;
    font-size: 16px;
  }
`;

export const DirectoryItemContainer = styled.div`
  min-width: 30%;
  height: 240px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  border-radius: 7px;
  margin: 0 7.5px 15px;
  overflow: hidden;

  &:hover {
    cursor: pointer;

    & ${BackgroundImage} {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    & ${Body} {
      opacity: 0.9;
    }
  }

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }

  @media screen and (min-width: 800px) {
    height: 200px;
  }
`;
