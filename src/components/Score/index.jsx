// Import styles
// Import modules
import { ResponsiveContainer, RadialBarChart, RadialBar, PolarAngleAxis, } from 'recharts'
import PropTypes from 'prop-types'

// Import CSS module
import styles from './Score.module.css'

/**
 * React component with RadialBarChart (from recharts)
 * Display score
 * @param {number} scoreData
 * @component
 */
function Score({ scoreData }) {
    const data = [
        {
            uv: scoreData * 100,
            fill: '#ff0101',
        },
    ]
    return (
        <>
            <div className={styles.statbox} >
                <div className={styles.title}>Score</div>
                <ResponsiveContainer className="positionRadial">
                    <RadialBarChart
                        // cx="50%"
                        // cy="50%"
                        startAngle={90}
                        endAngle={450}
                        innerRadius={85}
                        barSize={9}
                        data={data}
                    >
                        <PolarAngleAxis
                            type="number"
                            fill="#ff0101"
                            domain={[0, 100]}
                            tick={false}
                        />
                        <RadialBar
                            minAngle={1}
                            // background={'aaa'}
                            // background="transparent"
                            cornerRadius="10"
                            dataKey="uv"
                        />
                        <text
                            fontWeight="700"
                            fontSize={26}
                            fill="#282D30"
                            x="50%"
                            y="48%"
                            textAnchor="middle"
                        >
                            {scoreData * 100}%
                        </text>
                        <text
                            fontSize="16"
                            fontWeight="500"
                            fill="#74798C"
                            x="50%"
                            y="57%"
                            textAnchor="middle"
                        >
                            de votre
                        </text>
                        <text
                            fontSize="16"
                            fontWeight="500"
                            fill="#74798C"
                            x="50%"
                            y="66%"
                            textAnchor="middle"
                        >
                            objectif
                        </text>
                    </RadialBarChart>
                </ResponsiveContainer>
            </div>
        </>
    )
}

// PropTypes definition
Score.propTypes = {
    scoreData: PropTypes.number.isRequired,
};

export default Score