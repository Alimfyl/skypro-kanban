import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
`;

export const topicStyles = {
  orange: {
    backgroundColor: "#FFE4C2",
    color: "#FF6D00",
  },
  green: {
    backgroundColor: "#B4FDD1",
    color: "#06B16E",
  },
  purple: {
    backgroundColor: "#E9D4FF",
    color: "#9A48F1",
  },
  gray: {
    backgroundColor: "#94A6BE",
    color: "#FFFFFF",
  },
};
export const TopicText = styled.div`
  background-color: ${({ $color }) => topicStyles[$color]?.backgroundColor || topicStyles.gray.backgroundColor};
  color: ${({ $color }) => topicStyles[$color]?.color || topicStyles.gray.color};
`;