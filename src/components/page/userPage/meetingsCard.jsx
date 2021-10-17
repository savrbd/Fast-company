import React from "react";
import PropTypes from "prop-types";
const MeetingsCard = ({ user }) => {
    return (
        <div className="card mb-3">
            <div className="card-body d-flex flex-column justify-content-center text-center">
                <h5 className="card-title">
                    <span>{user.completedMeetings}</span>
                </h5>

                <h1 className="display-1">25</h1>
            </div>
        </div>
    );
};
MeetingsCard.propTypes = {
    user: PropTypes.object.isRequired
};

export default MeetingsCard;
