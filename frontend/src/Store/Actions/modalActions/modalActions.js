// export const displayModalAction = {
//   type: "displayModal",
//   payload: true
// };


export const closeModalAction = () => {
  return {
    type: "closeModal",
    payload: false
  }
};

export const displayModalAction = (payload) => {
  return {
    type: "displayModal",
    payload
  }
};