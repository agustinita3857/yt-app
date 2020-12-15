import React ,{useState,useEffect}from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import useVideos from '../hooks/useVideos'


const App=()=>{
    const [selectedVideo,setSelectedVideo]=useState(null);
    const [videos,search]=useVideos('buildings');

    useEffect(()=>{
        setSelectedVideo(videos[0]);
    },[videos])
    
    return(
        <div className="ui container">
            <SearchBar onFormSubmit={search}/>
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={selectedVideo}/>
                        </div>
                    
                    <div className="five wide column">
                        <VideoList 
                    onVideoSelect={setSelectedVideo}
                    videos={videos}/>
                        </div>
                    
                </div>
                
            </div>
         </div>
           
      )
};

/* Misma funcion que arriba pero usando clase
class App extends React.Component{
    state={ videos: [] ,selectedVideo:null}

    componentDidMount(){
        this.onTermSubmit('buildings')
    }

    onTermSubmit= async (term)=>{
        const response= await youtube.get('/search',{
            params:{
                q: term
            }
        });

        this.setState({
            videos:response.data.items,
            selectedVideo: response.data.items[0]
        })
    };
    onVideoSelect=(video)=>{
        this.setState({selectedVideo: video})
    }
    render(){
      
    }
*/

export default App;