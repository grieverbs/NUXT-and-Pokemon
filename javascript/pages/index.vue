<template>
    <!-- This block can be refactored into a component, but I'm sleepy-->
    <div class="grid-control">
        <!-- Disabled the paging, as the rendering the images in the main page for 60 pokemon is the biggest performance hit -->
        <div v-if="false">
            <button @click="pageDown">LEFT</button>
            Page: {{ page + 1 }}
            <button @click="pageUp">RIGHT</button>
        </div>
        <div>Filter The First 60 Pokemons:</div>
        <!--
            Ideally, we want to wait a couple of seconds to apply the filter after the last key stroke.  Huge performance issue due to loading the
            sprites.  Watching the input model causes the reactivity to rerender on each keystroke.  Lodash debounce may be a good tool, but can't
            figure out how to use it with NUXT/TS.  Tried watching the variable and prevent the update, but lacking documentation.  Decided to 
            just throw a button to manually update the filter on command.
        -->

        <!-- Ignore above, going to simply base on the take home code project -->
        <input v-model="userInput" placeholder="Type Here, try Char"/>
        <!-- <button @click="updateFilteredString">Search</button> -->

    </div>
    <div class="grid-container">
        <div v-for="pokemon in filtered">
            <NuxtLink :to="`/${pokemon.name}`">
                <PokemonThumbnail :pokemon-name="pokemon.name" />
            </NuxtLink>
        </div>  
    </div>
</template>

<script setup lang="js">
    definePageMeta({
        layout: 'default'
    });

    const userInput = ref("Char");

    const page = ref(0);
    /* Instruction just wanted the first 60 pokemon and limit on that. */
    const { data: pokemons } = await useFetch("https://pokeapi.co/api/v2/pokemon?limit=60");

    const filtered = computed(() => {
        // console.log(pokemons.value);
        const limit = [];
        // for (item in pokemons.value.results) console.log(item);
        pokemons.value.results.forEach((value) => {
            // results from pokemon api are all lowercase
            if (value.name.includes(userInput.value.toLowerCase()))
                limit.push({
                    name: value.name,
                    url: value.url
                });
        });
        return limit;
    });
</script>

<style scoped>
    .grid-container {
        padding-bottom: 1.25cm;
        max-width: 900px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(6, 1fr);
    }
    .grid-container > div:has(> .render-me) {
        background-color: #f5efef;
        text-align: center;
        padding: 20px;
        border: 1px solid #777;
    }
    .grid-control {
        text-align: center;
        padding-bottom: .5cm;
        font-size: .75cm;
    }
</style>