import React from 'react';
import {ResponsiveContainer, PieChart, Pie, Cell, } from 'recharts';
import propTypes from 'prop-types';

/**
 * Create a graph of sport's current day of the user
 * 
 * @class
 * @this {radialbar}
 * @param {dataKey} datakey of the user
 * @param {this.props.datasRadial} sport's purcentage of the user for the current day
 */

export default class radialbar extends React.Component{
  render(){
    const dataPie=[{"name": "Score", "value":this.props.datasRadial}, {"name":"", value:1-this.props.datasRadial}]
    const scoreContent= 100*this.props.datasRadial;

        return(
          
            <div className="radialbarblock"  key={this.props.dataKey}>
            <h2 className="scoretitle">Score</h2>
              <ResponsiveContainer>
                <PieChart 
                >
                  <Pie
                    data={dataPie}
                    dataKey="value"
                    innerRadius={70}
                    outerRadius={80}
                    startAngle={90}
                    endAngle={450}
                    fill="transparent"
                    stroke="transparent"
                    animationDuration={700}
                  >
                    <Cell 
                    fill="red" 
                    cornerRadius={50}
                    />
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="scoreobjectiveblock">
                <p className="scorecontent">{scoreContent}%</p>
                <p className="scoreobjective"> de votre objectif</p>
              </div>
            </div>
        )
    }
}

  /**
 * Check the types of the datas
 * 
 * @Property
 * @this {propTypes}
 */


radialbar.propTypes={
  datasSessionsTime: propTypes.oneOfType([
    propTypes.array,
    propTypes.object,
  ]
  ),
  dataKey:propTypes.number,
}