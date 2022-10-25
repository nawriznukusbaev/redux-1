import './App.css';
import reportWebVitals from './reportWebVitals';
import React, {useEffect, useRef} from 'react';
import {useDispatch} from "react-redux";
import {add} from "./store/actionsCreators";
import Lists from "./components/lists";


function App() {
    const dispatch = useDispatch();
    const val=useRef(null);
    const addForm = (e) => {
        if(e.key==='Enter'){
            dispatch(add(e.currentTarget.value));
            e.currentTarget.value=" ";
        }
    }
    const addBtn=()=>{
          dispatch(add(val.current.value));
          val.current.value='';
    }
    return (
            <div className="container">
                <div className="row">
                    <div className="col-8">< input type={"text"} ref={val}  className="form-control" placeholder={'добавить'} onKeyUp={(e)=>addForm(e)}/></div>
                    <div className="col-4"><button type="button" className="btn btn-primary" onClick={addBtn}>Добавить</button></div>
                </div>
                <Lists/>
            </div>
          );

}

export default App;
