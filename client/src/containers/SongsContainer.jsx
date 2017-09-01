import React from 'react';
import { connect } from 'react-redux';
import { fetchSongsIfNeeded } from '../actions/PlaylistActions';
import Songs from '../components/Songs';
import { getTime } from '../selectors/CommonSelectors';
import { getPlaylist, getSongs } from '../selectors/SongsSelectors';
import { getPlayingSongId } from '../utils/PlayerUtils';

const SongsContainer = props => <Songs {...props} />;

const mapStateToProps = (state) => {
  const { authed, entities, environment, player, playlists } = state;
  const { height, isMobile } = environment;
  const { users } = entities;
  const playingSongId = getPlayingSongId(player, playlists);

  return {
    authed,
    height,
    isMobile,
    playingSongId,
    playlist: getPlaylist(state),
    playlists,
    songs: getSongs(state),
    time: getTime(state),
    users,
  };
};

export default connect(mapStateToProps, {
  fetchSongsIfNeeded,
})(SongsContainer);