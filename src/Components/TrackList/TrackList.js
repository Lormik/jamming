import React from 'react';
import './TrackList.css';
import Track from '../Track/Track';

class TrackList extends React.Component {
    render() {
        let tracks;
        if (this.props.tracks) {
            tracks = this.props.tracks.map(track => {
                return <Track track={track} key={track.id} />
            })
        } else {
            tracks = 'error';
            return tracks;
        }

        return (
            <div className="TrackList">
                {tracks}
            </div>
        )
    }
}

export default TrackList;