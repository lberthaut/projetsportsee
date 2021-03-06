import React from 'react';
import {RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer, Radar} from 'recharts';
import propTypes from 'prop-types';

/**
 * Create a graph sport's kind of the user
 * 
 * @class
 * @this {Radargraph}
 * @param {dataKey} datakey of the user
 * @param {this.props.datasRadar} sport's data of the user splited to different kinds
 */

export default class Radargraph extends React.Component{
    render(){

        return(
            <div className="radargraphblock"  key={this.props.dataKey}>
                    <ResponsiveContainer className="responsive-container">
          <RadarChart outerRadius={90} data={this.props.datasRadar}>
            <PolarGrid />
            <PolarAngleAxis
              dataKey="kind"
              domain={[0, 250]}
              dy={5}
              tickLine={false}
              stroke="white"
            />
            <Radar name="" dataKey="value" fill="red" fillOpacity={0.7} />
          </RadarChart>
      </ResponsiveContainer>
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


Radargraph.propTypes={
    datasSessionsTime: propTypes.oneOfType([
      propTypes.array,
      propTypes.object,
    ]
    ),
    dataKey:propTypes.number,
  }