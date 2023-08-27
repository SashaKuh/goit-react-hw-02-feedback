import PropTypes from 'prop-types';
import {StyledNotification} from './Notification.styled';

export const Notification = ({ message }) => {
    return(
        <StyledNotification>
        <p>{message}</p>
        </StyledNotification>
    )
};

Notification.propType = {
    message: PropTypes.string.isRequired
}