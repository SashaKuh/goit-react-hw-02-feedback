import PropTypes from 'prop-types';
import { StyledList, StyledListItem } from './Statistics.styled';

export const Statistics = ({ total, positivePercentage, good, neutral, bad }) => {
    return (
      <StyledList>
        <StyledListItem>Good: {good}</StyledListItem>
        <StyledListItem>Neutral: {neutral}</StyledListItem>
        <StyledListItem>Bad: {bad}</StyledListItem>
        <StyledListItem>Total: {total}</StyledListItem>
        <StyledListItem>Positive feedback: {positivePercentage}%</StyledListItem>
      </StyledList>
    );
  };
  
  Statistics.propTypes = {
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.string.isRequired,
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  };