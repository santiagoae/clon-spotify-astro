import { usePlayerStore } from '@/store/playerStore';
import {Play, Pause} from './Player';

export function CardPlayButton({ id, size = 'small' }){
    const { currentMusic, isPlaying, setIsPlaying, setCurrentMusic } = usePlayerStore(state => state)

    const isPlayingSamePlaylist = isPlaying && currentMusic.playlist.id === id;

    const handleClick = () =>   {
        if(isPlayingSamePlaylist){
            setIsPlaying(!isPlaying);
            return
        }

        fetch(`/api/get-info-playlist.json?id=${id}`)
            .then(resp => resp.json())
            .then(data => {
                const { songs, playlist } = data;

                setIsPlaying(true);
                setCurrentMusic({ playlist, song: songs[0], songs })
            })
    }

   
    const iconClassName = size === 'small' ? 'w-4 h-4' : 'w-5 h-5'

    return(
        <button onClick={ handleClick } className="card-play-button rounded-full bg-green-500 p-3 hover:scale-105 transition hover:bg-green-400">
           { isPlayingSamePlaylist ? <Pause className={iconClassName} /> : <Play className={iconClassName} /> }
        </button>
    )
}