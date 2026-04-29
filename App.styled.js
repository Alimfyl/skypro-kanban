import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
`;


export const TopicText = styled.div`
background-color: ${({ $color }) => {
    if ($color === 'orange') return ' #FFE4C2';
    if ($color === 'green') return ' #B4FDD1';
    if ($color === 'purpule') return '#E9D4FF';
    return '#94A6BE'
}};
color: ${({ $color }) => {
    if ($color === 'orange') return '#FF6D00';
    if ($color === 'green') return '#06B16E';
    if ($color === 'purpule') return '#9A48F1;';
    return '#FFFFFF';
}};
`