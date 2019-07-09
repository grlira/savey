import styled from 'styled-components';

export default styled.div`
  display: grid;
  grid-gap: 0.5rem;
  grid-template-rows: 2rem;
  grid-template-columns: 8rem auto 6rem 6rem;

  width: 30rem;
  height: 3rem;

  background-color: ${props => props.theme.paperBackground};
  box-shadow: 0px 0px 5px 0px ${props => props.theme.paperAccent};
  border-radius: 5px;
  padding: 0.5rem;
  font-size: 1rem;
`;
