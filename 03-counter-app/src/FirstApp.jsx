import PropTypes from 'prop-types'


export const FirstApp = ( {title, subtitle} ) => {


    return (
        <>
            <h1>{ title }</h1>
            <p>{ subtitle }</p>
        </>
  )
}


FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string
}

FirstApp.defaultProps = {
    title: 'No hay texto que mostra en title',
    subtitle: 'No hay texto que mostra en subtitle'
}
