import PropTypes from 'prop-types';

const Img = ({className}) => {
    return(
       <div className={className}>
        <img src="" alt="" />
       </div>
    )
}

Img.propTypes = {
    className: PropTypes.string.isRequired,
};
export default Img