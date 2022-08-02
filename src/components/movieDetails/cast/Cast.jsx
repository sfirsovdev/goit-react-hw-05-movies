import defaultImg from '../../../images/defaultImg.png';
import PropTypes from 'prop-types';
export function Cast({ cast }) {
  return (
    <>
      {
        <ul>
          {cast.map(({ id, name, profile_path }) => {
            return (
              <li key={id}>
                <img
                  width={180}
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/original${profile_path}`
                      : defaultImg
                  }
                  alt={name}
                />
                <p>{name}</p>
              </li>
            );
          })}
        </ul>
      }
    </>
  );
}
Cast.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      profile_path: PropTypes.string,
    })
  ),
};
