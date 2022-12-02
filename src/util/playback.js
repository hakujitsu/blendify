export const callGetCurrentTrack = async (access_token) => {
  const response = await fetch(`https://api.spotify.com/v1/me/player/currently-playing`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${access_token}`
    },
  })
  if (response.status !== 200) {
    return null
  }
  const { item } = await response.json();
  return item
};

export const callPlaySpotifyCollection = async ({
  device_id,
  context_uri,
  offset,
  playerInstance: {
    _options: {
      getOAuthToken
    }
  }
}) => {
  await getOAuthToken(access_token => {
    fetch(`https://api.spotify.com/v1/me/player/play?device_id=${device_id}`, {
      method: 'PUT',
      body: JSON.stringify({ context_uri, offset: { position: offset } }),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${access_token}`
      },
    });
  });
};

export const callPlaySongs = async ({
  device_id,
  spotify_uris,
  playerInstance: {
    _options: {
      getOAuthToken
    }
  }
}) => {
  await getOAuthToken(access_token => {
    fetch(`https://api.spotify.com/v1/me/player/play?device_id=${device_id}`, {
      method: 'PUT',
      body: JSON.stringify({ uris: spotify_uris }),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${access_token}`
      },
    });
  });
};

export const callSeekPosition = async ({
  device_id,
  position_ms,
  playerInstance: {
    _options: {
      getOAuthToken
    }
  }
}) => {
  await getOAuthToken(access_token => {
    fetch(`https://api.spotify.com/v1/me/player/seek?device_id=${device_id}&position_ms=${position_ms}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${access_token}`
      },
    });
  });
};

export const callResumeSong = async ({
  device_id,
  spotify_uris,
  playerInstance: {
    _options: {
      getOAuthToken
    }
  }
}) => {
  await getOAuthToken(access_token => {
    fetch(`https://api.spotify.com/v1/me/player/play?device_id=${device_id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${access_token}`
      },
    });
  });
};

export const callPauseSong = async ({
  device_id,
  playerInstance: {
    _options: {
      getOAuthToken
    }
  }
}) => {
  await getOAuthToken(access_token => {
    fetch(`https://api.spotify.com/v1/me/player/pause?device_id=${device_id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${access_token}`
      },
    });
  });
};

export const callPreviousSong = async ({
  device_id,
  playerInstance: {
    _options: {
      getOAuthToken
    }
  }
}) => {
  await getOAuthToken(access_token => {
    fetch(`https://api.spotify.com/v1/me/player/previous?device_id=${device_id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${access_token}`
      },
    });
  });
};

export const callNextSong = async ({
  device_id,
  playerInstance: {
    _options: {
      getOAuthToken
    }
  }
}) => {
  await getOAuthToken(access_token => {
    fetch(`https://api.spotify.com/v1/me/player/next?device_id=${device_id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${access_token}`
      },
    });
  });
};

export const callToggleVolume = async ({
  volume,
  device_id,
  playerInstance: {
    _options: {
      getOAuthToken
    }
  }
}) => {
  await getOAuthToken(access_token => {
    fetch(`https://api.spotify.com/v1/me/player/volume?device_id=${device_id}&volume_percent=${volume}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${access_token}`
      },
    });
  });
};

// Use this at later date
export const callPlayContext = async ({
  device_id,
  context_uri,
  offset = 0,
  position_ms = 0,
  playerInstance: {
    _options: {
      getOAuthToken
    }
  }
}) => {
  await getOAuthToken(access_token => {
    fetch(`https://api.spotify.com/v1/me/player/play?device_id=${device_id}`, {
      method: 'PUT',
      body: JSON.stringify({ context_uri, offset, position_ms }),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${access_token}`
      },
    });
  });
};