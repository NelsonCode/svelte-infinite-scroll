<script>
  import axios from "axios";
  import { infiniteScroll } from "../../functions/infiniteScroll";
  let pageNumber = 0;
  let characters = [];
  let loading = false;
  const fetchData = async()=> {
    try {
      loading = true
      const response = await axios({
      method: "GET",
      url: "https://rickandmortyapi.com/api/character/",
      params: {page: pageNumber}
    })
    characters = [...characters, ...response.data.results]
    loading = false
    } catch (error) {
      console.log(error);
    }
  }

  let elementRef = null

  const load = ()=> {
    setTimeout(()=> {
      fetchData()
    }, 300)
  }

  $:{
   if (elementRef) {
     infiniteScroll({fetch: load, element: elementRef})
   }
  }
</script>

<div class="box-shawdow">
  {#each characters as character}
    <div class="grid-games">
      <div class="box-game">
        {character.name}
      </div>
    </div>
  {/each}
    {#if loading === false}
    <div bind:this={elementRef}>Cargando..</div>
    {/if}
</div>

<style>
  .box-shawdow {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    min-height: 97vh;
    height: 99.5%;
    background-color: #ffffff;
    width: 100%;
    max-width: 600px;
    margin: auto;
  }
  .grid-games {
    display: grid;
    grid-template-columns: 100%;
  }
  .box-game {
    margin-bottom: 10px;
    padding: 10px;
    background: rgb(192, 5, 120);
    color: white;
    font-weight: 900;
    text-align: center;
  }
</style>
