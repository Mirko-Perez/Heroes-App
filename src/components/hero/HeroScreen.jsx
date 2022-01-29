import { useMemo } from 'react';


import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHerobyId } from "../../selectors/getHeroById";



export const HeroScreen = () => {
    const { heroId } = useParams()
    
    const navigate = useNavigate()
    const hero = useMemo(() => getHerobyId( heroId ), [heroId])
    
    const handleReturn = () =>{
     navigate(-1)
    }
   
   const {
    id,
    superhero, 
    publisher, 
    alter_ego,
    first_appearance,
    characters} = hero

   const imgPath = `/assets/heroes/${id}.jpg`


   if ( !hero ){
    return <Navigate to='/' />
   }


    return (
        <div className='row mt-5'>
            <div className='col-4'>
                <img src={imgPath}  alt={superhero} className="img-thumbnail animate__animated animate__fadeInLeft"/>
            </div>
            
            <div className='col-8'>
                <h3>{superhero}</h3>

                <ul className="list-group list-group-flush animate__animated animate__fadeIn">
                    <li className="list-group-item"><b>Alter Ego: </b>{alter_ego}</li>
                    <li className="list-group-item"><b>Publisher: </b>{publisher}</li>
                    <li className="list-group-item"><b>First Appearance: </b>{first_appearance}</li>
                </ul>

                <h5 className="mt-3">Characters</h5>
                <p>{characters}</p>

                <button className="btn btn-outline-info" onClick={ handleReturn }>return</button>
            </div>
            
        </div>
    );
};
