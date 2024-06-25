
import PropTypes from 'prop-types'

export default function Validacion (props){
    return <div><h1>chocolate:{props.nombreReceta}!</h1></div>
    
}

Validacion.PropTypes={nombreReceta:PropTypes.string.isRequired} // asi se escribe para la validacion