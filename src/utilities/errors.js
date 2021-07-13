export const errorHandler = (response) => {
  if (!response.ok) {
    const errorMessage = `Oups, we have got an error: ${response.status} `;
    throw new Error(errorMessage);
  }
  return response;
};
