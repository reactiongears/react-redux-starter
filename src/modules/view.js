const VIEW = {
  SET_WIDTH: "view/set_width"
};

export const setViewWidth = width => ({
  type: VIEW.SET_WIDTH,
  payload: width
});

const BROWSER_MIN_WIDTH = 900;

/**
 * Tests a view to see if it's a mobile device
 * @param {number} width - the current width of the view
 * @returns {boolean} true if a mobile view
 */
export const isMobileView = width => width < BROWSER_MIN_WIDTH;

const initialState = {
  isMobile: window.innerWidth < BROWSER_MIN_WIDTH,
  width: window.innerWidth
};

const viewReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case VIEW.SET_WIDTH: {
      return {
        ...state,
        isMobile: isMobileView(action.payload),
        width: action.payload
      };
    }
    default: {
      return state;
    }
  }
};

export default viewReducer;
