import styled from '@emotion/styled';

export const AutorTitle = styled.p`
  font-weight: 500;
  margin-bottom: ${p => p.theme.space[2]}px;
`;

export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`;

export const CastItem = styled.li`
  &:not(:last-child) {
    margin-bottom: ${p => p.theme.space[5]}px;
  }
`;

export const CastImg = styled.img`
  margin-bottom: ${p => p.theme.space[3]}px;
`;

export const ActorName = styled.p`
  margin-bottom: ${p => p.theme.space[3]}px;
`;
