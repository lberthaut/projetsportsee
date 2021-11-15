import React from 'react';
import fire from '../../assets/fire.png'
import proteins from '../../assets/proteins.png'
import apple from '../../assets/apple.png'
import cheeseburger from '../../assets/cheeseburger.png'


export default class Nutritionlayout extends React.Component{

    render(){
/*         const {datascalories, datasproteines, datasglucides, dataslipides, id}= this.props; */

        return(
            <div className="nutritionlayoutblock"  key={this.props.dataKey}>
                <div className="caloriesblock nutritionblock">
                    <div className="caloriesicon iconblock">
                        <img className="caloriespic nutritionpic" src={fire} alt="calories"></img>
                    </div>
                    <div className="caloriesinfos nutritioninfos">
                        <p className="datascalories datasnutrition">{this.props.keyData.calorieCount}kCal</p>
                        <p className="nutritioninfos datasname">Calories</p>
                    </div>
                </div>
                <div className="proteinsblock nutritionblock">
                    <div className="proteinsicon iconblock">
                        <img className="proteinspic nutritionpic" src={proteins} alt="proteines"></img>
                    </div>
                    <div className="proteinsinfos nutritioninfos">
                        <p className="datasproteins datasnutrition">{this.props.keyData.proteinCount}g</p>
                        <p className="nutritioninfos datasname">Protéines</p>
                    </div>
                </div>
                <div className="glucidesblock nutritionblock">
                    <div className="glucidesicon iconblock">
                        <img className="glucidespic nutritionpic" src={apple} alt="glucides"></img>
                    </div>
                    <div className="glucidesinfos nutritioninfos">
                        <p className="datasglucides datasnutrition">{this.props.keyData.carbohydrateCount}g</p>
                        <p className="nutritioninfos datasname">Glucides</p>
                    </div>
                </div>
                <div className="lipidesblock nutritionblock">
                    <div className="lipidesicon iconblock">
                        <img className="lipidespic nutritionpic" src={cheeseburger} alt="lipides"></img>
                    </div>
                    <div className="lipidesinfos nutritioninfos">
                        <p className="dataslipides datasnutrition">{this.props.keyData.lipidCount}g</p>
                        <p className="nutritioninfos datasname">Lipides</p>
                    </div>
                </div>
            </div>
        )
    }
}