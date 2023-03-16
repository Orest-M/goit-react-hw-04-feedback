import PropTypes from 'prop-types';

import css from './leaveFeedback.module.css';

const LeaveFeedback = ({ incrementFeedback, options }) => {
  return (
    <div>
      <ul className={css.feedback__list} onClick={incrementFeedback}>
        {options.map(item => (
          <li key={item}>
            <button data-btn={item} className={css.feedback__btn}>
              {item}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

LeaveFeedback.propTypes = {
  incrementFeedback: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.string),
};

export default LeaveFeedback;
