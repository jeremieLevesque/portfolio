import { useEffect, useState } from 'react';
import styles from './Homepage.module.scss';
import Recipe from './components/Recipe/Recipe';
import Loading from '../../components/Loading/Loading';


function Homepage() {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    let cancel = false;
   async function fetchRecipes() {
      try {
        isLoading(true);
        const response = await fetch('https://restapi.fr/api/recipes');
        if (response.ok && !cancel){
          const recipes = await response.json();
          setRecipes(Array.isArray(recipes) ? recipes : [recipes]);
        }
      } catch(e) {
        console.log('ERREUR');
      }finally{
        setIsLoading(false);
      }
   }
   fetchRecipes();
   return () => (cancel = true);
  }, []);


  function handleInput(e) {
    const filter = e.target.value;
    setFilter(filter.trim().toLowerCase());
  }

  return (
    


    <div className="flex-fill container d-flex flex-column p-20">
      <h1 className="my-30">test</h1>
      <div className={`card d-flex flex-fill flex-column p-20 mb-20 ${styles.contentCard}`}>
        <div
          className={`d-flex flex-row justify-content-center align-item-center my-30 ${styles.searchBar}`}
        >
          <i className="fa-solid fa-magnifying-glass mr-15"></i>
          <input
            onInput={handleInput}
            className="flex-fill"
            type="text"
            placeholder="Rechercher"
          />
        </div>

        { isLoading ? (
         <Loading/>
        ) : (
          <div className={styles.grid}>
          {recipes
            .filter((r) => r.title.toLowerCase().startsWith(filter))
            .map((r) => (
              <Recipe key={r._id} title={r.title} image={r.image} />
            ))}
        </div>
          )}


        
      </div>
    </div>



  );
}

export default Homepage;