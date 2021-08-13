const getLikedMovies = () => {
  try {
    if (!localStorage.getItem('likes')) {
      return [];
    }
    const parsedLikes = JSON.parse(localStorage.getItem('likes'));
    return parsedLikes;
  } catch (error) {
    console.log('Error while fetching likes.');
  }
};
export default { getLikedMovies };
