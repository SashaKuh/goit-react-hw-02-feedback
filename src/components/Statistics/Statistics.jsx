import PropTypes from 'prop-types';
import {StyledList, StyledListItem} from './Statistics.styled';

export const Statistics = ({ total, positivePercentage, feedbackTypes, feedbackValues }) => {
    
    return(
        <>
            <StyledList>
            {feedbackTypes.map(type => (
                <StyledListItem key={type}>
                    {type.charAt(0).toUpperCase() + type.slice(1)} : {feedbackValues[type]}
                </StyledListItem>
        ))}
                <StyledListItem>Total: {total}</StyledListItem>
                <StyledListItem>Positive feedback: {positivePercentage}%</StyledListItem>
            </StyledList>
        </>
    )
}

Statistics.propTypes = {
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.string.isRequired,
    feedbackTypes: PropTypes.array.isRequired,
    feedbackValues: PropTypes.object.isRequired,
  };