import React from 'react';
import './style.scss';

function OurProposal(props) {
    return (
        <div class="row">
            <div class="col s12 m6">
                <div class="card">
                    <div class="card-image">
                        <img src={props.img} />
                    </div>
                    <div class="card-content">
                        <p>{props.children}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OurProposal;
