import {useSelector,useDispatch} from "react-redux";
import '../../App.css';
import {remove} from "../../store/actionsCreators";
import {change} from "../../store/actionsCreators";

function Lists() {
    const lists = useSelector((state) => state)
    const dispatch=useDispatch();
    const changeItem=(e)=>{
        console.log(e.target.parentNode.parentNode.data.item);

    }
    const removeItem=(key)=>{
        dispatch(remove(key))
    }
    if (lists.length > 0) {
        return (
            <div className="row">
                <ul>
                    {lists.map((item, index) => {
                            return (
                                <li className="list-group-item" key={index} value={item}><input style={{outline:"none", border:0}} defaultValue={item} onKeyUp={(e)=>{if(e.key==='Enter')
                                {dispatch(change(e.currentTarget.value,index))}}}/><div>
                                <button type="button" className="btn btn-primary btn-sm">Change
                                </button>
                                <button type="button" className="btn btn-primary btn-sm" onClick={()=>dispatch(remove(index))}>Delete</button>
                            </div></li>
                               )
                            })
                    }
                </ul>
            </div>
              )
             }
    else return (<div className="row"><p>Пусто</p></div>)
}
export default Lists