import React from 'react';

const MatrixLegend = () => {
    return (
        <div className="matrix-legend">
            <h3>Matrix Guide</h3>
            <div className="legend-items">
                <div className="legend-item">
                    <div className="legend-color" style={{ backgroundColor: '#4caf5015', borderColor: '#4caf50' }}></div>
                    <span>High Priority (D+F ≥ 16)</span>
                </div>
                <div className="legend-item">
                    <div className="legend-color" style={{ backgroundColor: '#ffc10715', borderColor: '#ffc107' }}></div>
                    <span>Medium Priority (D+F: 12-15)</span>
                </div>
                <div className="legend-item">
                    <div className="legend-color" style={{ backgroundColor: '#f4433615', borderColor: '#f44336' }}></div>
                    <span>Low Priority (D+F &lt; 12)</span>
                </div>
            </div>
            <p className="legend-note">Ideas in the top-right (high desirability + high feasibility) are the best bets!</p>
        </div>
    );
};

export default MatrixLegend;