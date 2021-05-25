import React from 'react'
//import PropTypes from 'prop-types'
export const Todos = ({list, onDelete}) => {
    let s={
        border: "10px black"
    }
    return (
        <div className="container my-3 " style={s}>
        {list.length===0? "NO task" :
        list.map((ele)=>
            <div key={ele.srno} className="container my-3" style={s}>
                {ele.srno}<br/>
                
                {ele.title}<br/>
                {ele.description}<br/>
                <button className="btn btn-sm btn-danger " onClick={()=>{onDelete(ele)}}>Delete</button>
            </div>
            )}

        </div>
    )
}
// Todos.propTypes ={
//     list : PropTypes.array
// }