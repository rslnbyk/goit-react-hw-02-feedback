import { FeedbackBar, FeedbackButton } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackBar>
      {options.map((opt, idx) => (
        <li key={idx}>
          <FeedbackButton type="button" onClick={() => onLeaveFeedback(opt)}>
            {opt[0].toUpperCase() + opt.slice(1)}
          </FeedbackButton>
        </li>
      ))}
    </FeedbackBar>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
