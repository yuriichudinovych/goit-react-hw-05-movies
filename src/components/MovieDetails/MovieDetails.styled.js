import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const MoviesDetails = styled.section`
  padding-top: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[4]}px;
`;

export const CardWrapper = styled.div`
  margin-bottom: ${p => p.theme.space[4]}px;
  display: flex;
`;

export const DescriptionContainer = styled.div`
  padding-left: 32px;
`;

export const LinkItem = styled(Link)`
  text-decoration: none;
  font-weight: 500;
  font-size: 18px;
  color: ${p => p.theme.colors.black};
  transition: 250ms linear;
  &:hover,
  :focus {
    color: ${p => p.theme.colors.secondary};
  }
`;

export const LinkItemGoBack = styled(LinkItem)`
  display: inline-flex;
  align-items: flex-end;
  gap: 10px;
  margin-bottom: ${p => p.theme.space[4]}px;
`;

export const MovieTitle = styled.h2`
  margin-bottom: ${p => p.theme.space[4]}px;
`;

export const MovieDesc = styled.p`
  margin-bottom: ${p => p.theme.space[4]}px;
`;

export const SubTitle = styled.h3`
  margin-bottom: ${p => p.theme.space[4]}px;
`;

export const GenresList = styled.ul`
  display: flex;
`;

export const GenreItem = styled.li`
  &:not(:last-child) {
    margin-right: ${p => p.theme.space[3]}px;
  }
  &:not(:last-child)::after {
    content: ',';
  }
`;

export const LinkItemReviews = styled(LinkItem)`
  margin-bottom: 0;
`;

export const AdditionalList = styled.ul`
  margin-bottom: ${p => p.theme.space[4]}px;
`;
