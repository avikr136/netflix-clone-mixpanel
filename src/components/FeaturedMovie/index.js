import React from 'react';
import './styles.css';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import AddIcon from '@material-ui/icons/Add';
import {call1, call2} from "../Mixpanel"

function FeaturedMovie( { item } ) {

  let firstDate = new Date(item.first_air_date);
  let genres = [];
  for(let i in item.genres){
    genres.push(item.genres[i].name);
  }
  let description = item.overview.length > 200 ? item.overview.substring(0, 200) + '...' : item.overview;

  return (
    <section 
        className="featured" 
        style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}
    >
        <div className="featured--vertical">
            <div className="featured--horizontal">
                <div className="featured--name">{item.original_name}</div>
                
                <div className="featured--info">
                    <div className="featured--points">{item.vote_average} pontos</div>
                    <div className="featured--year">{firstDate.getFullYear()}</div>
                    <div className="featured--seasons">{item.number_of_seasons} temperatura{item.number_of_seasons !== 1 ? 's' : ''}</div>
                </div>

                <div className="featured--description">{description}</div>
                <div className="featured--buttons">
                    <a disabled className="featured--watchbutton"><div><PlayArrowIcon /> Assitir</div></a>
                    <a disabled className="featured--mylistbutton"><div onClick={() => call2("Adding to My List", {
                        message: "Adding this movie to my list",
                        movie_item: item.id,
                        movie_title: item.name,
                        movie_seasons: item.number_of_seasons,
                        movie_type: item.genre,
                        movie_rating: item.vote_average
                    })}><AddIcon />Minha Lista</div></a>
                </div>
                <div className="featured--genres"><strong>G??neros:</strong> {genres.join(', ')}</div>
            </div>
        </div>
    </section>
  );
}

export default FeaturedMovie;
