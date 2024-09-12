import PropTypes from 'prop-types';
const Aside = ({className})  => {
    return(
  <div className={className}>
     
  </div>
    )
} 

Aside.propTypes = {
    className: PropTypes.string.isRequired,
}

export default Aside;
