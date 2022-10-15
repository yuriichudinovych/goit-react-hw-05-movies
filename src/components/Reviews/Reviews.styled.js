import styled from '@emotion/styled';

export const AutorTitle = styled.p`
  font-weight: 500;
  margin-bottom: ${p => p.theme.space[2]}px;
`;

export const RviewsItem = styled.li`
  &:not(:last-child) {
    margin-bottom: ${p => p.theme.space[4]}px;
  }
`;
