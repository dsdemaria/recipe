import React, { Component } from 'react';
import Radium from 'radium';

const styles = {
  h3: {
    textAlign: 'center',
  }
}

const Instructions = (props) => (
  <div>
    <h3 style={styles.h3}>Instructions</h3>
    <ol>
      <li>Lorem ipsum dolor sit amet, no persius signiferumque sea. Vim quas consetetur suscipiantur an, consul malorum id usu. Eu sonet singulis qui, mei ea iudico iisque. Dolorem eleifend senserit nec eu.</li>
      <li>Per purto quodsi atomorum ut, malis urbanitas sed ex. Vis te tantas dolorum. Pri possim ceteros te, summo fastidii an eos. Pri errem graeco ne, putent nemore atomorum eu vim. Eam in tale eruditi omnesque, amet eripuit per ex, scripta placerat sententiae his et.</li>
      <li>Ei usu luptatum necessitatibus. Meis minim primis pri at, vix agam aliquid intellegam ei. Eam te eruditi denique principes. Mei diam autem ut. Brute ceteros te qui, et vim albucius voluptaria sententiae, audiam tritani maiestatis eu quo. Doctus saperet meliore ea mel, case laudem partiendo usu ad.</li>
      <li>Ex dicat animal dolorum eos. Ad eos suas debet volutpat, his eu regione denique insolens. Est ea amet ubique, cum purto possit id. Error tantas corpora sed ad, vel te nisl sale adipiscing.</li>
      <li>Pro ei inani laboramus. Ridens melius vulputate cum eu, ius inermis luptatum molestiae ne. At has partem putent, est ad vocibus deserunt, agam atqui ius eu. Nam ut quot meis utinam, pri ceteros facilisis expetenda no. Ut mea inermis maiorum efficiendi, ius meis noster in, cu duo appareat contentiones.</li>
    </ol>
  </div>
)

export default Radium(Instructions);
