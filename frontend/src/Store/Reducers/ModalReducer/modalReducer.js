export const modalReducer = (state = false, action) => {
  switch (action.type) {
    case "displayModal":
      return {
        isModalOpened: action.payload,
        closeModal: false
      };
    case "closeModal":
      return {
        closeModal: true,
        isModalOpened: true
      };
    default:
      return {
        isModalOpened: state,
        closeModal: state
      }
  }
};