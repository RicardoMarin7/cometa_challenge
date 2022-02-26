import numberToMoney from '../../utils/numberToMoney'

const Totalinfo = ( props ) => {

    const { 
        student = { 
            first_name: 'Nombre', 
            last_name: 'Apellido'},
        total
        } = props

    return (
        <div className="Totalinfo Card">
            <div className="Totalinfo__student">
                <p className="Totalinfo__student_name">{student.first_name} {student.last_name}</p>
                <p className="Totalinfo__student_cohort">{student.cohort}</p>
            </div>

            <div className="Totalinfo__debt">
                <p className="Totalinfo__debt_name">Total a Pagar</p>
                <p className="Totalinfo__debt_amount">{total < 1 ? '$ ---' : numberToMoney(total)}</p>
            </div>
        </div>
    );
}
 
export default Totalinfo;