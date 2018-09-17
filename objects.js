var playlist = new Object ({ artistName: 'songTitle' });

function updatePlaylist(playlist, artistName, songTitle)
{
<<<<<<< HEAD
playlist[artistName] = songTitle;
  return playlist;
=======
return Object.assign({}, playlist, {[artistName]: songTitle })
>>>>>>> 2fb0a14802ae88b30444c849eb0620eb8f52b443
}

function removeFromPlaylist(playlist, artistName)
{
<<<<<<< HEAD
  delete playlist[artistName]
=======
  delete playlist.artistName;
>>>>>>> 2fb0a14802ae88b30444c849eb0620eb8f52b443
  return playlist
}