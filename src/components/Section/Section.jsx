import css from './Section.module.css'
import PropTypes from 'prop-types'

const Section = ({title, children}) => {
    return (
        <section className={css.section}>
            <p className={css.title}>{title}</p>
            {children}
        </section>
    )
};

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}

export default Section