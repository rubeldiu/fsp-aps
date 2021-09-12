import styled from '@emotion/styled';
import { HighlightText } from '../shared';

const Container = styled.div`
  .top-box {
    border: solid 1px #fff;
    bottom: 80vmin;
    left: 20vmin;
    position: absolute;
    right: 20vmin;
    top: 0;
  }
  ,
  .top-box:before {
    border-bottom: solid 1px #fff;
    border-left: solid 1px #fff;
    border-right: solid 1px #fff;
    border-radius: 0 0 15vmin 15vmin;
    bottom: -5vmin;
    content: '';
    height: 5vmin;
    left: 10vmin;
    position: absolute;
    right: 10vmin;
  }
  ,
  .centre-circle {
    border: solid 1px #fff;
    border-radius: 100%;
    bottom: 40vmin;
    left: 27.5vmin;
    position: absolute;
    right: 27.5vmin;
    top: 40vmin;
  }
  ,
  .centre-line {
    border-bottom: solid 1px #fff;
    bottom: 50vmin;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
  }
  ,
  .bottom-box {
    border: solid 1px #fff;
    bottom: 0;
    left: 20vmin;
    position: absolute;
    right: 20vmin;
    top: 80vmin;
  }
  ,
  .bottom-box:before {
    border-left: solid 1px #fff;
    border-right: solid 1px #fff;
    border-top: solid 1px #fff;
    border-radius: 15vmin 15vmin 0 0;
    content: '';
    height: 5vmin;
    left: 10vmin;
    position: absolute;
    right: 10vmin;
    top: -5vmin;
  }
`;

export function Team(props: any) {
  return (
    <Container>
      <div className="top-box"></div>

      <div className="centre-circle"></div>
      <div className="centre-line"></div>
      <div className="bottom-box"></div>

      <div className="gk" style={{ display: 'flex', justifyContent: 'center' }}>
        <HighlightText>
          {props.item.position === 'GKP' ? 'GKP' : null}
        </HighlightText>
      </div>

      <div
        className="dfc"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          flexDirection: 'row',
        }}
      >
        <HighlightText>
          {props.item.position === 'DEF' ? 'DEF' : null}
        </HighlightText>
      </div>
      <div
        className="mid"
        style={{ display: 'flex', justifyContent: 'flex-end' }}
      >
        <HighlightText>
          {props.item.position === 'MID' ? 'MID' : null}
        </HighlightText>
      </div>
      <div
        className="fwd"
        style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}
      >
        <HighlightText>
          {props.item.position === 'FWD' ? 'FWD' : null}
        </HighlightText>
      </div>
    </Container>
  );
}
