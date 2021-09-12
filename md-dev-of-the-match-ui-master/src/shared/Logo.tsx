import styled from '@emotion/styled';

const LogoImage = styled.img`
  width: 200px;
  display: inline-block;
  vertical-align: middle;
`;

export function Logo() {
  return (
    <LogoImage
      src="https://getplaymaker.app/assets/images/playmaker_logo.png"
      alt="Playmaker logo"
    />
  );
}
