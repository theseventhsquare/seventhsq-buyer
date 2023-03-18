import React from 'react'
import "../Categories.css";
import LOGS from '../Sub Category Icons/Wood Logs.png'
import VM from '../Sub Category Icons/Veneer & Mica.png'
import BB from '../Sub Category Icons/Blockboard.png'
import PB from '../Sub Category Icons/Particleboard.png'
import MDf from '../Sub Category Icons/MDF.png'
import PLY from '../Sub Category Icons/Plywood.png'
function Wood(props) {
    return (
        <div className="categorySection">
         
          <h1 className="text-center mt-5 pt-4">Boards & Sheets</h1>

        <div className="categorySectionOptions">
          <div className="categorySectionItems slide">
            <img
              src={LOGS}
              alt=""
              onClick={()=>props.handletype('Plywood')}
            />
            <h5>Plywood</h5>
            {/* <p>1212 pieces</p> */}
          </div>
          <div className="categorySectionItems slide">
            <img
              src={VM}
              alt=""
              onClick={()=>props.handletype('Medium Density Fibreboard (MDF)')}
            />
            <h5>Medium Density Fibreboard (MDF)</h5>
            {/* <p>1212 pieces</p> */}
          </div>
          <div className="categorySectionItems slide">
            <img
              src={BB}
              alt=""
              onClick={()=>props.handletype('High Density Fibreboard (HDF)')}
            />
            <h5>High Density Fibreboard (HDF)</h5>
            {/* <p>1212 pieces</p> */}
          </div>
          <div className="categorySectionItems slide">
            <img
              src={PB}
              alt=""
              onClick={()=>props.handletype('Oriented Strand Board (OSB)')}
            />
            <h5>Oriented Strand Board (OSB)</h5>
            {/* <p>1212 pieces</p> */}
          </div>
          <div className="categorySectionItems slide">
            <img
              src={MDf}
              alt=""
              onClick={()=>props.handletype('MDF')}
            />
            <h5>MDF</h5>
            {/* <p>1212 pieces</p> */}
          </div>
          <div className="categorySectionItems slide">
            <img
              src={PLY}
              alt=""
              onClick={()=>props.handletype('Plywood')}
            />
            <h5>Plywood</h5>
            {/* <p>1212 pieces</p> */}
          </div>
          
        </div>
      </div>
    )
}

export default Wood
